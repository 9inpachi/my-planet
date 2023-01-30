import { Logger } from '../../../common/util/logger';
import { IRouter } from './lib/irouter';

export abstract class Router implements IRouter {
  protected historyStack: string[] = [];
  protected routeHandlers: { [route: string]: () => void } = {};

  protected abstract setupDOMEvents(): void;
  protected abstract prependBaseURL(route: string): string;

  public initialize() {
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

    Logger.getInstance().logError(`No route defined for the path ${route}`);
    throw new Error(`No route defined for the path ${route}`);
  }
}
