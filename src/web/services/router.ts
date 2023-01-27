import { Logger } from '../../common/util/logger';
import * as packageJSON from '../../../package.json';

export class Router {
  private static instance: Router;
  private routeHandlers: { [url: string]: () => void } = {};

  constructor() {
    if (Router.instance === undefined) {
      Router.instance = this;
    }

    return Router.instance;
  }

  public static getInstance(): Router {
    return new Router();
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
  }

  public replace(url: string) {
    window.history.replaceState(null, '', this.prependBaseURL(url));
    this.resolveRouteHandler(url)();
  }

  public back() {
    window.history.back();
  }

  private resolveRouteHandler(url: string) {
    if (this.routeHandlers[url]) {
      return this.routeHandlers[url];
    }

    Logger.getInstance().logError(`No route defined for the path ${url}`);
    throw new Error(`No route defined for the path ${url}`);
  }

  private prependBaseURL(url: string) {
    // `baseUrl` may not be provided in package.json.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { baseUrl } = packageJSON;
    return baseUrl ? baseUrl + url : url;
  }
}
