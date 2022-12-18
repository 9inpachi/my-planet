import { registerComponent, styles } from '../component';
import { Icon } from '../icon/icon';

import devIconStyles from './dev-icon.css?raw';

@styles(devIconStyles)
class DevIcon extends Icon {}

registerComponent(DevIcon);
