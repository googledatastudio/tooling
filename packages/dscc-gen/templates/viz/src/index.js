const dscc = require('@google/dscc');
const viz = require('@google/dscc-scripts/viz/initialViz.js');

// write viz code here
const drawViz = (data) => {
  viz.readmeViz();
  viz.firstViz(data);
};

dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
