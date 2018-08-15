import React, { Component } from 'react';
import { VictoryBar, VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';
import logo from './logo.svg';
import './App.css';
import Socialdemokratiet from './Socialdemokratiet';

class App extends Component {

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Amagerfælled i relation</h1>
        </header>

        <p className="App-p">En sammenligning af antal underskrifter for amagerfælleds bevarelse i 
          relation til politiske partiers nøgletal</p>

        <Socialdemokratiet />

      </div>
    );
  }
}

export default App;
