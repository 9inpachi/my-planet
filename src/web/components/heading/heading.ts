import {
  Component,
  property,
  registerComponent,
  styles,
  template,
} from '../component';

import headingTemplate from './heading.html?raw';
import headingStyles from './heading.css?raw';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

@template(headingTemplate)
@styles(headingStyles)
class Heading extends Component {
  @property()
  level!: HeadingLevel;
}

registerComponent(Heading);
