import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludos from './components/Saludos';
import Numeros from './components/Numeros';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
      let nombres = ["Edwin","Enrique","Ana","Daniel","Sebastian"];
      const listNombres = nombres.map((element)=> <Saludos nombre={element}/>
      )

      let numero = [];

      for (var i = 1; i <= 10; i++) {
       numero.push(i)
      }

      const listNumeros = numero.map((element)=> <Numeros numero={element}/>
      )



    return (
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {listNombres}
        {listNumeros}    
      </div>
    );
  }
}

export default App;
