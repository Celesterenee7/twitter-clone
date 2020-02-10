import React from 'react';
import logo from './logo.svg';
import './App.css';
import RightBox from './components/rightbox/RightBox'
import MidBox from './components/midbox/MidBox'
import LeftBox from './components/leftbox/LeftBox'

function App() {
  return (
    <div className="App">
      <div className="Grid">
        <LeftBox/>
        <MidBox/>
        <RightBox/>
      </div>
    </div>
  );
}

export default App;
