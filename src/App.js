import React, { Component } from 'react';
import soc_logo from './rose.png';
import ven_logo from './venstre_logo.svg';
import kons_logo from './kons-logo.png';
import df_logo from './df-logo.png';
import la_logo from './la.png';

import Socialdemokratiet from './Socialdemokratiet';
import Venstre from './Venstre';
import Konservative from './Konservative';
import Danskfolkeparti from './Danskfolkeparti';
import Liberalalliance from './Liberalalliance';
import './App.css';

const collection = "https://www.skrivunder.net/bevar_koebenhavns_naturhistoriske_kronjuvel";
const signatures = 48189;
const headerClasses = [
  "soc-header",
  "ven-header",
  "df-header",
  "kons-header",
  "la-header"
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
    const state = this.state.active;
    let nactive = (this.state.active === this.state.max) ? 0 : state + 1;
    this.setState({ 
      active: nactive, 
      headerClass: headerClasses[nactive]
    });
  }

  left() {
    const state = this.state.active;
    let nactive = (this.state.active === 0) ? this.state.max : state - 1;
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

        <p className="explanation">En sammenligning af antal underskrifter for Amagerfælleds bevarelse i relation til nøgletal for de  politiske partier der stadig er for bebyggelse, <a href={collection}>indsamlingen</a> har ca. {signatures} underskrifter.</p>

        <div className={this.state.headerClass}>
          <i className="left" type="button" onClick={this.left}></i>
            {(this.state.active === 0) && 
              <div className="soc-wrapper">
                <img src={soc_logo} className="soc-logo" alt="Socialdemokratiet" />
                <span className="soc-text">
                  Socialdemokratiet
                </span>
              </div>
            }
            {(this.state.active === 1) &&
              <img src={ven_logo} className="ven-logo" alt="Venstre" />
            }

            {(this.state.active === 2) &&
               <div className="df-wrapper">
                <img src={df_logo} className="df-logo" alt="Dansk Folkeparti" />
                <span className="df-text">
                  Dansk Folkeparti
                </span>
              </div>
            }

            {(this.state.active === 3) &&
               <div className="kons-wrapper">
                <img src={kons_logo} className="kons-logo" alt="Konservative" />
                <span className="kons-text">
                  Konservative
                </span>
              </div>
            }

            {(this.state.active === 4) &&
              <div className="la-wrapper">
                <img src={la_logo} className="la-logo" alt="Libaral Alliance" />
                <span className="la-text">
                  Liberal Alliance
                </span>
              </div>
            }

          <i className="right" type="button" onClick={this.right}></i>
        </div>

        {(this.state.active === 0) && <Socialdemokratiet signatures={signatures} /> }
        {(this.state.active === 1) && <Venstre signatures={signatures} /> }
        {(this.state.active === 2) && <Danskfolkeparti signatures={signatures} /> }
        {(this.state.active === 3) && <Konservative signatures={signatures} /> }
        {(this.state.active === 4) && <Liberalalliance signatures={signatures} /> }

      </div>
    );
  }
}

export default App;
