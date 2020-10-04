import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from "@fortawesome/free-solid-svg-icons"

import Main from './Container'

function App() {
  return (
    <div className="App">
      {library.add(fab, fas)}
      <Main/>
    </div>
  );
}

export default App;
