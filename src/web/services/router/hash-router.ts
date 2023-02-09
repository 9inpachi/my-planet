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
      // Replace the current route.
      this.replace(route);
    } else {
      // Replace the current route on load.
      window.addEventListener('load', () => this.replace(route));
    }

    window.addEventListener('hashchange', () => {
      this.runRouteHandler(this.getRouteFromHash());
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
