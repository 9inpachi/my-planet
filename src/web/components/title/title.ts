import { styles, template } from '../component';
import { Component } from '../component/component';

import titleTemplate from './title.html';
import titleStyles from './title.css';

@template(titleTemplate)
@styles(titleStyles)
class Title extends Component {}

customElements.define('mp-title', Title);
