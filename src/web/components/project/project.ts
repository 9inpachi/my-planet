import { Component, registerComponent, styles, template } from '../component';

import projectTemplate from './project.html?raw';
import projectStyles from './project.css?raw';

@template(projectTemplate)
@styles(projectStyles)
class Project extends Component {}

registerComponent(Project);
