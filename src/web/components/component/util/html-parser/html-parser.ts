import { Component } from '../../component';
import { IHTMLParser } from './ihtml-parser';

const eventPrefix = 'on:';

export class HTMLParser implements IHTMLParser {
  private parsedFragment: DocumentFragment;

  constructor(htmlTemplate: string, private componentContext: Component) {
    const parser = new DOMParser();
    const parsedHTML = parser.parseFromString(htmlTemplate, 'text/html');
    const body = parsedHTML.querySelector('body');
    this.parsedFragment = document.createDocumentFragment();

    if (body) {
      for (const child of [...body.children]) {
        this.parsedFragment.appendChild(child);
      }
    }
  }

  processEventListeners() {
    this.getRootElements().forEach((rootElement) => {
      this.addEventListenersToNodes(rootElement);
    });
  }

  getRootElements(): Element[] {
    return [...this.parsedFragment.children];
  }

  /**
   * Event listeners processed here execute in the context
   * of the component which the template belongs to.
   */
  private addEventListenersToNodes(node: Element) {
    const eventAttributes = node
      .getAttributeNames()
      .filter((attribute) => attribute.startsWith(eventPrefix));

    for (const attribute of eventAttributes) {
      const eventName = attribute.substring(eventPrefix.length);
      const eventListener = node.getAttribute(attribute);
      if (!eventListener) continue;

      node.addEventListener(
        eventName,
        // Evaluate the wrapper function (`new Function`) in component's context
        // to return the right value of `this.onClick`.
        // And then make the listener run in the component's context.
        new Function(`return ${eventListener}`)
          .apply(this.componentContext)
          ?.bind(this.componentContext),
      );

      node.removeAttribute(attribute);
    }

    for (const child of node.children) {
      this.addEventListenersToNodes(child);
    }
  }
}
