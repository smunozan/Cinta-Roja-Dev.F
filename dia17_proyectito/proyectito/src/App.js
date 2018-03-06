import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="botones">
          <div className="boton">
            <button type="button" class="btn btn-secondary btn-lg">Ver eventos</button>
            <button type="button" class="btn btn-secondary btn-lg">Crear eventos</button>
          </div>      
        </div>
      </div>

      
      
    );
  }
}

export default App;
