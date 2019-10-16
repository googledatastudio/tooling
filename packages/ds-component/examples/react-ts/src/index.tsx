import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

document.body.innerHTML = '<div id="root">Loading</div>';
ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
