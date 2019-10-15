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
