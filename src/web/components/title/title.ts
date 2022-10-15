import { styles, template, registerComponent } from '../component';
import { Component } from '../component/component';

import titleTemplate from './title.html?raw';
import titleStyles from './title.css?raw';

@template(titleTemplate)
@styles(titleStyles)
class Title extends Component {}

registerComponent(Title);
