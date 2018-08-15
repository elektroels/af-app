import React, { Component } from 'react';
import './Socialdemokratiet.css';
import logo from './rose-ny.jpg';
import { VictoryBar, VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const underskrifter = 48158;

const soc = [
  // https://www.dr.dk/ligetil/grafik-saa-mange-stemmer-fik-partierne
  // { emne: "Af antal stemmer til kommunalvalg 2017", antal: 1030014 },
  // https://da.wikipedia.org/wiki/Socialdemokratiet
  { subject: "Af antal stemmer til folketingsvalg 2015", antal: 925329 },
  { subject: "Af antal stemmer til europaparlamentsvalg 2014", antal: 434894 },
  // https://www.tv2lorry.dk/kv2017/Koebenhavn
  { subject: "Af antal stemmer til kommunalvalg 2017 kbh", antal: 82819 },
  // https://www.ft.dk/da/ofte-stillede-spoergsmaal/parti_hvor-mange-medlemmer-har-de-politiske-partier
  { subject: "Af antal medlemmer 2016", antal: 40060 }
];

class Socialdemokratiet extends Component {
  constructor() {
    super();

    this.state = {
      subject: soc[0].subject,
      percent: this.calculate(soc[0]),
      data: this.getData(this.calculate(soc[0]))
    };
  }
  
  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  calculate(sub) {
    let dec = underskrifter / sub.antal;
    let per = dec * 100;
    return Math.floor(per);
  }

  componentDidMount() {
    let count = 1;

    this.setStateInterval = window.setInterval(() => {
      count = (count >= soc.length) ? 0 : count;

      let percent = this.calculate(soc[count]);
      let subject = soc[count].subject;

      this.setState({
        subject,
        percent, 
        data: this.getData(percent)
      });

      count++;

    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  render() {
    return (
      <div className="Socialdemokratiet">


      <div className="logo">
        <a href="/da/">
          <img src="{logo}" alt="Socialdemokratiet" />
            <div class="header__txt">
              Socialdemokratiet
            </div>
          </a>
        </div>

        <div>
          <svg viewBox="0 0 400 400" width="300px" height="100%">
            <VictoryPie
              standalone={false}
              animate={{ duration: 1000 }}
              width={400} height={400}
              data={this.state.data}
              innerRadius={120}
              cornerRadius={25}
              labels={() => null}
              style={{
                data: { fill: (d) => {
                  const color = d.y > 30 ? "green" : "red";
                  return d.x === 1 ? color : "transparent";
                }}
              }}
            />
            <VictoryAnimation duration={1000} data={this.state}>
              {(newProps) => {
                return (
                  <VictoryLabel
                    textAnchor="middle" verticalAnchor="middle"
                    x={200} y={200}
                    text={`${Math.round(newProps.percent)}%`}
                    style={{ fontSize: 45 }}
                  />
                );
              }}
            </VictoryAnimation>
          </svg>
        </div>

        <header className="App-header">
          <h1 className="App-title">{this.state.subject}</h1>
        </header>

      </div>
    );
  }
}

export default Socialdemokratiet;
