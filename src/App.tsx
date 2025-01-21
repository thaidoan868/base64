import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Main } from './components/Main/Main';
import { LeftSideBar } from './components/LeftSideBar/LeftSideBar';

function App() {
  return (
    <div className="App">
      <div className='grid'>
        <div className="leftSideBar">
          <LeftSideBar/>
        </div>
        <Main/>
      </div>
    </div>
  );
}

export default App;
