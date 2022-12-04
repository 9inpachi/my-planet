import {
  Component,
  registerComponent,
  styles,
  template,
} from '../../../component';

import timelineEventTemplate from './timeline-event.html?raw';
import timelineEventStyles from './timeline-event.css?raw';

@template(timelineEventTemplate)
@styles(timelineEventStyles)
class TimelineEvent extends Component {}

registerComponent(TimelineEvent);
