import React from 'react';
import './App.css';

import Drawer from './Components/Layout/Drawer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello Acquisitions App</h1>
       <Drawer/>
      </header>
    </div>
  );
}

export default App;
