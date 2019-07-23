const dscc = require('@google/dscc');
const local = require('./localMessage.js');

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = true;

// write viz code here
const drawViz = (data) => {
  // add a README
  if (document.querySelector('div')) {
    var oldDiv = document.querySelector('div');
    oldDiv.parentNode.removeChild(oldDiv);
  }

  // append the data to a div
  let div = document.createElement('div');
  div.innerHTML = 
  `<h2>Community Visualization Codelab</h2>
  This is the starter template for the <code>dscc-gen</code> codelab.
  <p>
  There are currently ${data.tables.DEFAULT.length} rows in the data.
  </p>
  `;

  document.body.appendChild(div);  
  console.log(data);
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}
