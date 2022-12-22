import { registerComponent, template } from '../../component';
import { Continent } from '../continent/continent';

import connectContinentTemplate from './connect-continent.html?raw';

@template(connectContinentTemplate)
class ConnectContinent extends Continent {}

registerComponent(ConnectContinent);
