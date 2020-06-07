import {ObjectFormat, subscribeToData, objectTransform} from '@google/dscc';
import * as viz from '@google/dscc-scripts/viz/initialViz';
import * as local from './localMessage';

// write viz code here
const drawViz = (data: ObjectFormat) => {
  viz.readmeViz();
  viz.firstViz(data);
};

// renders locally
if (DSCC_IS_LOCAL) {
  drawViz(local.message);
} else {
  subscribeToData(drawViz, {transform: objectTransform});
}
