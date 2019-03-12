const dscc = require('@google/dscc');

const printMessage = (data) => {
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

dscc.subscribeToData(printMessage, {transform: dscc[TRANSFORM_PARAM]});
