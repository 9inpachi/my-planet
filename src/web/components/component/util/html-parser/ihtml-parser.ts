export interface IHTMLParser {
  processEventListeners(): void;
  getRootElements(): Element[];
}
