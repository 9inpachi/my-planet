import { Component, template, styles, registerComponent } from '../component';
import ArrowBackIcon from '../../../assets/icons/arrow-back.svg?raw';

import continentTemplate from './continent-info.html?raw';
import continentStyles from './continent-info.css?raw';

@template(continentTemplate)
@styles(continentStyles)
class ContinentInfo extends Component {
  private arrowBackIcon = ArrowBackIcon;
}

registerComponent(ContinentInfo);
