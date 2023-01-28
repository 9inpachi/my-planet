export interface IRouter {
  initialize(): void;
  addRoute(url: string, handler: VoidFunction): void;
  to(url: string): void;
  replace(url: string): void;
  back(): void;
  getCurrentRoute(): string;
}
