import { HTMLParser } from './util/html-parser/html-parser';
import { IHTMLParser } from './util/html-parser/ihtml-parser';
import { evaluateStringTemplate } from './util/string';

export interface Component {
  template: string;
  styles: string;
}

export abstract class Component extends HTMLElement {
  private shadowDOM: ShadowRoot;
  private htmlParser!: IHTMLParser;

  protected init?(): void;

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    setTimeout(() => this.lazyConstructor());
  }

  // The lazy constructor is used in `setTimeout` because
  // that's when we can access the child's properties through `this`.
  private lazyConstructor() {
    const evaluatedTemplate = evaluateStringTemplate(this.template, this);
    this.htmlParser = new HTMLParser(evaluatedTemplate, this);

    this.styles && this.shadowDOM.appendChild(this.processStyles());
    this.template && this.shadowDOM.append(...this.processTemplate());

    this.init?.();
  }

  private processStyles() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', this.styles);

    return link;
  }

  protected processTemplate() {
    this.htmlParser.processEventListeners();

    return this.htmlParser.getRootElements();
  }

  protected getElement(name: string): HTMLElement | null {
    return this.shadowDOM.querySelector(`*[\\:${name}]`);
  }
}
