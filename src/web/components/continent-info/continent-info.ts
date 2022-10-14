import { Component, template, styles } from '../component';

import continentTemplate from './continent-info.html?raw';
import continentStyles from './continent-info.css?url';

@template(continentTemplate)
@styles(continentStyles)
export class ContinentInfo extends Component {}
