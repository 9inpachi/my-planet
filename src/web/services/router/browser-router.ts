import { Router } from './router';

export class BrowserRouter extends Router {
  private static instance: BrowserRouter;

  constructor() {
    super();

    if (BrowserRouter.instance === undefined) {
      BrowserRouter.instance = this;
    }

    return BrowserRouter.instance;
  }

  public static getInstance(): BrowserRouter {
    return new BrowserRouter();
  }

  protected setupDOMEvents() {
    const { pathname: route } = window.location;

    if (document.readyState === 'complete') {
      // Directly call the current route's handler.
      this.replace(route);
    } else {
      // Call the current route's handler on load.
      window.addEventListener('load', this.routeHandlers[route]);
    }

    window.addEventListener('popstate', () => {
      const { pathname: route } = window.location;
      this.resolveRouteHandler(route)();
    });
  }

  protected prependBaseURL(route: string) {
    // See https://vitejs.dev/guide/env-and-mode.html.
    const baseURL = import.meta.env.BASE_URL ?? '';

    return baseURL + route;
  }
}
