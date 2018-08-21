import React, { Component } from 'react';
import { VictoryBar, VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';
import Socialdemokratiet from './Socialdemokratiet';
import soc_logo from './rose.png';
import './App.css';

const collection = "https://www.skrivunder.net/bevar_koebenhavns_naturhistoriske_kronjuvel";
const signatures = 48183;


class App extends Component {
  constructor() {
    super();

    this.state = { 
      active: 0,
      max: 2 
    };

    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
  }

  right() {
    let nactive = (this.state.active === this.state.max) ? 0 : ++this.state.active;
    this.setState({ active: nactive });
  }

  left() {
    let nactive = (this.state.active === 0) ? this.state.max : --this.state.active;
    this.setState({ active: nactive });
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Amagerfælled i relation</h1>
        </header>

        <p className="explanation">En sammenligning af antal underskrifter for Amagerfælleds bevarelse i relation til nøgletal for de  politiske partiers der stadig er for bebyggelse, <a href={collection}>indsamlingen</a> har pt. {signatures} underskrivere</p>

        <div className="soc-header">
          <i className="left" type="button" onClick={this.left}></i>
            <a className="soc-a" href="https://www.socialdemokratiet.dk/da/">
              <img src={soc_logo} className="soc-logo" alt="Socialdemokratiet" />
              <div className="soc-text">
                Socialdemokratiet
              </div>
            </a>
          <i className="right" type="button" onClick={this.right}></i>
        </div>

        {(this.state.active === 0) && <Socialdemokratiet signatures={signatures} /> }
        {(this.state.active === 1) && <div><p>second</p></div> }
        {(this.state.active === 2) && <div><p>third</p></div> }

      </div>
    );
  }
}

export default App;
