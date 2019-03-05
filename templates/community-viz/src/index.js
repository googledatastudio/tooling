const dscc = require('@google/dscc');

// import the local data
import * as utils from '../scripts/vizUtils.js';
import * as viz from '../scripts/initialViz.js';

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = true;

// write viz code here
const drawViz = (data) => {
  viz.firstViz(data);
};

// logic to handle local vs. Data Studio deployment
utils.renderViz(LOCAL, drawViz);
