/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const README = `
<h2>Community Viz Local Development</h2>
<p>
This visualization is live. Edit <code>./src/index.js</code> to see changes.
</p>
<p>
To update your local data:
<ol>
<li>Update the config in <code>./src/index.json</code></li>
<li>
  Run: <br/>
  <code>npm run update_message</code>
</li>
<li>Deploy the visualization using your dev bucket as your component ID in Data Studio</li>
<li>Replace the contents of <code>./src/localMessage.js</code> with the displayed code.</li>
</ol>
</p>

<p style="margin-bottom:1cm;">
For more information, see the
<a target="_blank" href="https://developers.google.com/datastudio/visualization">community visualization documentation.</a>
</p>

`;

export const readmeViz = () => {
  // append a div to the DOM for the README
  if (document.querySelector('div')) {
    var oldDiv = document.querySelector('div');
    oldDiv.parentNode.removeChild(oldDiv);
  }
  let readmeDiv = document.createElement('div');
  readmeDiv.innerHTML = README;
  document.body.appendChild(readmeDiv);
}

export const firstViz = (data) => {
  
  if (document.querySelector('canvas')) {
    var oldCanv = document.querySelector('canvas');
    oldCanv.parentNode.removeChild(oldCanv);
  }

  // everything below is verbatim from the codelab
  // create and add the canvas
  var canvasElement = document.createElement('canvas');
  var ctx = canvasElement.getContext('2d');
  canvasElement.id = 'myViz';
  document.body.appendChild(canvasElement);

  var rowData = data.tables.DEFAULT;
  var ctx = canvasElement.getContext('2d');

  // clear the canvas.
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  // set the canvas width and height
  ctx.canvas.width = 300;
  ctx.canvas.height = 200;

  // scale the bar width and max bar height to the canvas
  var barWidth = ctx.canvas.width / (rowData.length * 2);
  var maxBarHeight = ctx.canvas.height - 20;

  // vertical offset for bar text
  var textYOffset = 20;

  ctx.fillStyle = '#000000';

  // obtain the maximum bar metric value for scaling purposes
  var metricMax = 0;
  rowData.forEach(function(row) {
    metricMax = Math.max(metricMax, row['metricID'][0]);
  });

  // draw bars
  // add dimension labels below bars
  // 'barDimension' and 'barMetric' come from the id defined in myViz.json
  rowData.forEach(function(row, i) {
    // calculates the height of the bar using the row value, maximum bar
    // height, and the maximum metric value calculated earlier
    var barHeight = Math.round(
        -1 * ((row['metricID'][0] * maxBarHeight) / metricMax)
    );

    // calculates the x coordinate of the bar based on the width of the convas
    // and the width of the bar
    var barX = (ctx.canvas.width / rowData.length) * i + barWidth / 2;

    ctx.fillRect(barX, maxBarHeight, barWidth, barHeight);

    var barText = row['dimID'][0];
    var textX = barX + barWidth / 4;
    var textY = maxBarHeight + textYOffset;

    ctx.fillText(barText, textX, textY);
  });
};
