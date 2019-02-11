
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import TimeApp from './TimeApp'



class App extends Component {

    
  render() {
    return (

      <div>

      <p>
       <TimeApp/>
      </p>
      <ul>
        <li>Hour</li>
        <li>Minute</li>
        <li>Second</li>
      </ul>
    </div>
    );
  }
}

export default App;


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
