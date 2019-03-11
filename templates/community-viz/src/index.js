const dscc = require('@google/dscc');

// import the local data
import * as viz from '../scripts/viz/initialViz.js';
import * as local from '../scripts/data/localData.js';

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = true;

// write viz code here
const drawViz = (data) => {
  viz.firstViz(data);
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}
