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

  /**
   * Event listeners processed here execute in the context
   * of the component which the template belongs to.
   */
  processEventListeners() {
    const rootElements = this.getRootElements();

    const addEventListenersToNodes = (node: Element) => {
      for (const attribute of node.getAttributeNames()) {
        if (attribute.startsWith(eventPrefix)) {
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
              .bind(this.componentContext),
          );
        }
      }

      for (const child of node.children) {
        addEventListenersToNodes(child);
      }
    };

    rootElements.forEach(addEventListenersToNodes);
  }

  getRootElements(): Element[] {
    return [...this.parsedFragment.children];
  }
}
