import { Component, template, registerComponent } from '../../../component';

import continentBodyTemplate from './continent-body.html?raw';

@template(continentBodyTemplate)
class ContinentBody extends Component {}

registerComponent(ContinentBody);
