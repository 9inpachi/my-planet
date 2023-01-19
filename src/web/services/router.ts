export class Router {
  private static instance: Router;
  private routeHandlers: { [url: string]: () => void } = {};

  constructor() {
    if (!Router.instance) {
      Router.instance = new Router();
      this.setupDOMEvents();
    }

    return Router.instance;
  }

  private setupDOMEvents() {
    const { pathname: url } = window.location;

    if (this.routeHandlers[url]) {
      window.addEventListener('load', this.resolveRouteHandler(url));
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
    window.history.pushState(null, '', url);
    this.resolveRouteHandler(url)();
  }

  private resolveRouteHandler(url: string) {
    if (this.routeHandlers[url]) {
      return this.routeHandlers[url];
    }

    throw new Error(`No route defined for the path ${url}`);
  }
}
