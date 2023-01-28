import { Logger } from '../../../common/util/logger';
import { IRouter } from './lib/irouter';

export class HashRouter implements IRouter {
  private static instance: HashRouter;

  private historyStack: string[] = [];
  private routeHandlers: { [route: string]: () => void } = {};

  constructor() {
    if (HashRouter.instance === undefined) {
      HashRouter.instance = this;
    }

    return HashRouter.instance;
  }

  public static getInstance(): HashRouter {
    return new HashRouter();
  }

  public initialize() {
    this.setupDOMEvents();
  }

  private setupDOMEvents() {
    const route = this.getRouteFromHash();

    if (document.readyState === 'complete') {
      // Directly call the current route's handler.
      this.routeHandlers[route]?.();
    } else {
      // Call the current route's handler on load.
      window.addEventListener('load', this.routeHandlers[route]);
    }

    window.addEventListener('hashchange', () => {
      this.resolveRouteHandler(this.getRouteFromHash())();
    });
  }

  public addRoute(route: string, handler: VoidFunction) {
    this.routeHandlers[route] = handler;
  }

  public to(route: string) {
    window.history.pushState(null, '', this.prependBaseURL(route));
    this.resolveRouteHandler(route)();

    this.historyStack.push(route);
  }

  public replace(route: string) {
    window.history.replaceState(null, '', this.prependBaseURL(route));
    this.resolveRouteHandler(route)();

    // Replace the latest URL.
    if (this.historyStack.length > 0) {
      this.historyStack[this.historyStack.length - 1] = route;
    }
  }

  public back() {
    window.history.back();
    this.historyStack.pop();
  }

  public getCurrentRoute() {
    return this.historyStack[this.historyStack.length - 1];
  }

  private getRouteFromHash() {
    return window.location.hash.slice(1);
  }

  private resolveRouteHandler(route: string) {
    if (this.routeHandlers[route]) {
      return this.routeHandlers[route];
    }

    Logger.getInstance().logError(`No route defined for the path ${route}`);
    throw new Error(`No route defined for the path ${route}`);
  }

  private prependBaseURL(route: string) {
    const baseURL = import.meta.env.BASE_URL ?? '';

    return `${baseURL}#${route}`;
  }
}
