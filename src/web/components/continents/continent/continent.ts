import { Component } from '../../component';

export class Continent extends Component {
  static get observedAttributes() {
    return ['open'];
  }

  attributeChangedCallback(name: string, _oldVal: string, newVal: any) {
    if (name !== 'open') {
      return;
    }

    const continentInfo = this.shadowDOM.querySelector('mp-continent-info');
    if (newVal === null) {
      continentInfo?.removeAttribute(name);
    } else {
      continentInfo?.setAttribute(name, newVal);
    }
  }
}
