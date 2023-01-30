import { Router } from './router';

export class HashRouter extends Router {
  private static instance: HashRouter;

  constructor() {
    super();

    if (HashRouter.instance === undefined) {
      HashRouter.instance = this;
    }

    return HashRouter.instance;
  }

  public static getInstance(): HashRouter {
    return new HashRouter();
  }

  protected setupDOMEvents() {
    const route = this.getRouteFromHash();

    if (document.readyState === 'complete') {
      // Directly call the current route's handler.
      this.replace(route);
    } else {
      // Call the current route's handler on load.
      window.addEventListener('load', () => this.replace(route));
    }

    window.addEventListener('hashchange', () => {
      this.resolveRouteHandler(this.getRouteFromHash())();
    });
  }

  protected prependBaseURL(route: string) {
    // See https://vitejs.dev/guide/env-and-mode.html.
    const baseURL = import.meta.env.BASE_URL ?? '';

    return `${baseURL}#${route}`;
  }

  private getRouteFromHash() {
    const routeFromHash = window.location.hash.slice(1);

    return routeFromHash === '' ? '/' : routeFromHash;
  }
}
