import { Component, property, registerComponent } from '../component';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

class Heading extends Component {
  @property()
  level!: HeadingLevel;
}

registerComponent(Heading);
