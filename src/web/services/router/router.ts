import { Logger } from '../../../common/util/logger';
import { IRouter } from './lib/irouter';

export abstract class Router implements IRouter {
  protected fallbackRoute?: string;
  protected historyStack: string[] = [];
  protected routeHandlers: { [route: string]: () => void } = {};

  protected abstract setupDOMEvents(): void;
  protected abstract prependBaseURL(route: string): string;

  public initialize() {
    this.setupDOMEvents();
  }

  public setFallbackRoute(fallbackRoute: string) {
    this.fallbackRoute = fallbackRoute;
  }

  public addRoute(route: string, callback: () => void) {
    this.routeHandlers[route] = callback;
  }

  public to(route: string) {
    this.runRouteHandler(route, () => {
      window.history.pushState(null, '', this.prependBaseURL(route));
      this.historyStack.push(route);
    });
  }

  public replace(route: string) {
    this.runRouteHandler(route, () => {
      window.history.replaceState(null, '', this.prependBaseURL(route));

      // Replace the latest URL.
      if (this.historyStack.length > 0) {
        this.historyStack[this.historyStack.length - 1] = route;
      }
    });
  }

  public back() {
    window.history.back();
    this.historyStack.pop();
  }

  public getCurrentRoute() {
    return this.historyStack[this.historyStack.length - 1];
  }

  protected runRouteHandler(route: string, onSuccess?: () => void) {
    if (this.routeHandlers[route]) {
      this.routeHandlers[route]();
      onSuccess?.();

      return;
    }

    Logger.getInstance().logError(`No route defined for the path "${route}".`);

    if (this.fallbackRoute) {
      this.replace(this.fallbackRoute);
      Logger.getInstance().logWarning(`Using fallback route "${route}".`);
    }
  }
}
