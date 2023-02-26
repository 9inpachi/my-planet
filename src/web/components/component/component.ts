/**
 * This code is taken from https://github.com/9inpachi/web-components.
 */

import { HTMLParser } from './util/html-parser/html-parser';
import { IHTMLParser } from './util/html-parser/ihtml-parser';
import { evaluateStringTemplate } from './util/template';

export interface Component {
  template: string;
  styles: string;
}

export abstract class Component extends HTMLElement {
  protected shadowDOM: ShadowRoot;
  private htmlParser!: IHTMLParser;

  protected onBeforeInit?(): void;
  protected onInit?(): void;

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  protected connectedCallback(): void {
    this.onBeforeInit?.();

    const evaluatedTemplate = evaluateStringTemplate(this.template, this);
    this.htmlParser = new HTMLParser(evaluatedTemplate, this);

    this.styles && this.processStyles();
    this.template && this.shadowDOM.append(...this.processTemplate());

    this.onInit?.();
  }

  private processStyles() {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(this.styles);

    this.shadowDOM.adoptedStyleSheets = [styleSheet];
  }

  protected processTemplate() {
    this.htmlParser.processEventListeners();

    return this.htmlParser.getRootElements();
  }

  protected getElement(name: string): HTMLElement | null {
    return this.shadowDOM.querySelector(`*[\\:${name}]`);
  }
}
