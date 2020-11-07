import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {console.log(process.env)}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
