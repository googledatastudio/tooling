const dscc = require('@google/dscc');

// import the local data
import * as utils from '../scripts/viz/vizUtils.js';
import * as viz from '../scripts/viz/initialViz.js';

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = true;

// write viz code here
const drawViz = (data) => {
  console.log("HELLO");
  viz.firstViz(data);
};

// handles viz rendering logic with dscc
utils.renderViz(LOCAL, drawViz);
