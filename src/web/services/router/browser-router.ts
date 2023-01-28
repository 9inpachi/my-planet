import { Logger } from '../../../common/util/logger';
import { IRouter } from './lib/irouter';

export class BrowserRouter implements IRouter {
  private static instance: BrowserRouter;

  private historyStack: string[] = [];
  private routeHandlers: { [url: string]: () => void } = {};

  constructor() {
    if (BrowserRouter.instance === undefined) {
      BrowserRouter.instance = this;
    }

    return BrowserRouter.instance;
  }

  public static getInstance(): BrowserRouter {
    return new BrowserRouter();
  }

  public initialize() {
    this.setupDOMEvents();
  }

  private setupDOMEvents() {
    const { pathname: url } = window.location;

    if (document.readyState === 'complete') {
      // Directly call the current route's handler.
      this.routeHandlers[url]?.();
    } else {
      // Call the current route's handler on load.
      window.addEventListener('load', this.routeHandlers[url]);
    }

    window.addEventListener('popstate', () => {
      const { pathname: url } = window.location;
      this.resolveRouteHandler(url)();
    });
  }

  public addRoute(url: string, callback: () => void) {
    this.routeHandlers[url] = callback;
  }

  public to(url: string) {
    window.history.pushState(null, '', this.prependBaseURL(url));
    this.resolveRouteHandler(url)();

    this.historyStack.push(url);
  }

  public replace(url: string) {
    window.history.replaceState(null, '', this.prependBaseURL(url));
    this.resolveRouteHandler(url)();

    // Replace the latest URL.
    this.historyStack[this.historyStack.length - 1] = url;
  }

  public back() {
    window.history.back();
    this.historyStack.pop();
  }

  public getCurrentRoute() {
    return this.historyStack[this.historyStack.length - 1];
  }

  private resolveRouteHandler(url: string) {
    if (this.routeHandlers[url]) {
      return this.routeHandlers[url];
    }

    Logger.getInstance().logError(`No route defined for the path ${url}`);
    throw new Error(`No route defined for the path ${url}`);
  }

  private prependBaseURL(url: string) {
    const baseURL = import.meta.env.BASE_URL ?? '';

    return baseURL + url;
  }
}
