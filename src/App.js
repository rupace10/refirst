import React, { Component } from 'react';
//import logo from './logo.svg';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      My First App
        <Projects/>
      </div>
    );
  }
}

export default App;
