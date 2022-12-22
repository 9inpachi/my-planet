import { registerComponent, template } from '../../component';
import { Continent } from '../continent/continent';

import projectsContinentTemplate from './projects-continent.html?raw';

@template(projectsContinentTemplate)
class ProjectsContinent extends Continent {}

registerComponent(ProjectsContinent);
