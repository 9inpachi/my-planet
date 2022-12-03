import { Component, registerComponent, styles, template } from '../component';

import timelineTemplate from './timeline.html?raw';
import timelineStyles from './timeline.css?raw';

@template(timelineTemplate)
@styles(timelineStyles)
class Timeline extends Component {}

registerComponent(Timeline);
