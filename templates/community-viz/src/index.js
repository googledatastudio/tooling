const dscc = require('@google/dscc');

// import the local data
import * as local from './localData.js';

// change this to 'true' for local development
// change this to 'false' before deploying
const LOCAL = false;

if (LOCAL) {
  setTimeout(() => {
    window.postMessage(local.message, '*');
  }, 1000);
}

// Write Viz Code here
const drawViz = (data) => {
  // append a div to the DOM
  if (document.querySelector('div')) {
    var oldDiv = document.querySelector('div');
    oldDiv.parentNode.removeChild(oldDiv);
  }

  // append the data to a div
  let div = document.createElement('div');
  var msgText = JSON.stringify(data, null, 2);
  div.innerHTML = `<pre>export const message = ${msgText};</pre>`;
  document.body.appendChild(div);
};

// logic to handle local vs. Data Studio deployment
if (LOCAL) {
  const handleMessage = (message) => {
    if (!message.data.type) {
      drawViz(message);
    }
  };
  window.addEventListener('message', handleMessage);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}
