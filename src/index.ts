// Import Components
import './web/components';

import { Planet } from './planet/planet';

Planet.build({
  canvasElement: document.getElementById('threeCanvas') as HTMLCanvasElement,
});
