import { Logger } from '../../../common/util/logger';
import { IRouter } from './lib/irouter';

export abstract class Router implements IRouter {
  protected fallbackRoute?: string;
  protected historyStack: string[] = [];
  protected routeHandlers: { [route: string]: () => void } = {};

  protected abstract setupDOMEvents(): void;
  protected abstract prependBaseURL(route: string): string;

  public initialize(fallbackRoute?: string) {
    this.fallbackRoute = fallbackRoute;
    this.setupDOMEvents();
  }

  public addRoute(route: string, callback: () => void) {
    this.routeHandlers[route] = callback;
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

  protected resolveRouteHandler(route: string) {
    if (this.routeHandlers[route]) {
      return this.routeHandlers[route];
    }

    let noRouteMessage = `No route defined for the path ${route}.`;

    if (!this.fallbackRoute) {
      Logger.getInstance().logError(noRouteMessage);
      throw new Error(noRouteMessage);
    }

    const fallbackURL = this.prependBaseURL(this.fallbackRoute);
    window.history.replaceState(null, '', fallbackURL);

    noRouteMessage += ` Using fallback route ${this.fallbackRoute}.`;
    Logger.getInstance().logError(noRouteMessage);

    return this.routeHandlers[this.fallbackRoute];
  }
}
