export interface IRouter {
  addRoute(url: string, handler: VoidFunction): void;
  to(url: string): void;
  replace(url: string): void;
  back(): void;
}
