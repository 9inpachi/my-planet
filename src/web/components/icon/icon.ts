import { Component, property, registerComponent } from '../component';

class Icon extends Component {
  @property()
  src!: string;

  protected onInit() {
    this.loadIcon();
  }

  private async loadIcon() {
    const svg = (await import(/* @vite-ignore */ `../../../${this.src}?raw`))
      .default;
    this.shadowDOM.innerHTML = svg;
    this.shadowDOM.firstElementChild?.setAttribute('part', 'svg');
  }
}

registerComponent(Icon);
