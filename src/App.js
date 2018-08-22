import React, { Component } from 'react';
import { VictoryBar, VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';
import Socialdemokratiet from './Socialdemokratiet';
import soc_logo from './rose.png';
import ven_logo from './venstre_logo.svg';
import './App.css';

const collection = "https://www.skrivunder.net/bevar_koebenhavns_naturhistoriske_kronjuvel";
const signatures = 48183;
const headerClasses = [
  "soc-header",
  "ven-header",
  "df-header",
  "kon-header",
  "lib-header"
];


class App extends Component {
  constructor() {
    super();


    this.state = { 
      active: 0,
      max: 4,
      headerClass: headerClasses[0]
    };

    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
  }

  right() {
    let nactive = (this.state.active === this.state.max) ? 0 : ++this.state.active;
    this.setState({ 
      active: nactive, 
      headerClass: headerClasses[nactive]
    });
  }

  left() {
    let nactive = (this.state.active === 0) ? this.state.max : --this.state.active;
    this.setState({ 
      active: nactive,
      headerClass: headerClasses[nactive]
    });
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Amagerfælled i relation</h1>
        </header>

        <p className="explanation">En sammenligning af antal underskrifter for Amagerfælleds bevarelse i relation til nøgletal for de  politiske partier der stadig er for bebyggelse, <a href={collection}>indsamlingen</a> har pt. {signatures} underskrivere</p>

        <div className={this.state.headerClass}>
          <i className="left" type="button" onClick={this.left}></i>

            {(this.state.active === 0) && 
              <a className="soc-a" href="https://www.socialdemokratiet.dk/da/">
                <img src={soc_logo} className="soc-logo" alt="Socialdemokratiet" />
                <div className="soc-text">
                  Socialdemokratiet
                </div>
              </a>
            }

           {(this.state.active === 1) &&
             <a className="ven-a" href="https://www.venstre.dk/">
               <img src={ven_logo} className="ven-logo" alt="Venstre" />
             </a>
           }

           {(this.state.active === 2) &&
             <span>DF LOGO</span>
           }

           {(this.state.active === 3) &&
             <span>kons</span>
           }

           {(this.state.active === 4) &&
             <span>lib</span>
           }

          <i className="right" type="button" onClick={this.right}></i>
        </div>

        {(this.state.active === 0) && <Socialdemokratiet signatures={signatures} /> }
        {(this.state.active === 1) && <div><p>venstre</p></div> }
        {(this.state.active === 2) && <div><p>df</p></div> }
        {(this.state.active === 3) && <div><p>kons</p></div> }
        {(this.state.active === 4) && <div><p>lib</p></div> }

      </div>
    );
  }
}

export default App;
