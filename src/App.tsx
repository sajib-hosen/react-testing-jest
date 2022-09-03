import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet/Greet';
import Application from './Components/application/Application';

function App() {
  return (
    <div className="App">
      <Greet name="sajib"/>
      <Application/>
    </div>
  );
}

export default App;
