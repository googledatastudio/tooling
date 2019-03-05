import * as local from '../src/localData.js';

export const renderViz = (LOCAL, draw) => {
  if (LOCAL) {
    setTimeout(() => {
      window.postMessage(local.message, '*');
    }, 200);
    const handleMessage = (message) => {
      if (!message.data.type) {
        draw(message.data);
      }
    };
    window.addEventListener('message', handleMessage);
  } else {
    dscc.subscribeToData(draw, {transform: dscc.objectTransform});
  }
};
