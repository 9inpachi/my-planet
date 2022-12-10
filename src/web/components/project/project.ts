import { Component, registerComponent, template } from '../component';

import projectTemplate from './project.html?raw';

@template(projectTemplate)
class Project extends Component {}

registerComponent(Project);
