import React, { Component } from 'react';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';
import Table from './Table';

const soc = [
  { 
    subject: "Folketingsvalg 2015",
    text: "Af antal stemmer til Folketingsvalg i 2015", 
    number: 685188,
    source: "https://da.wikipedia.org/wiki/Folketingsvalget_2015"
  },
  { 
    subject: "Europaparlamentsvalg 2014",
    text: "Af antal stemmer til Europaparlamentsvalg i 2014", 
    number: 378772,
    source: "https://da.wikipedia.org/wiki/Europa-Parlamentsvalget_2014_i_Danmark"
  },
  { 
    subject: "Kommunalvalg København 2017",
    text: "Af antal stemmer til kommunalvalg i 2017 København", 
    number: 23652,
    source: "https://www.tv2lorry.dk/kv2017/Koebenhavn"
  },
  { 
    subject: "Antal medlemmer 2016", 
    text: "Af antal medlemmer i 2016", 
    number: 35957, 
    source: "https://www.ft.dk/da/ofte-stillede-spoergsmaal/parti_hvor-mange-medlemmer-har-de-politiske-partier"
  },
];

class Venstre extends Component {

  constructor(props) {
    super(props);

    this.state = {
      subject: soc[0].text,
      percent: this.calculate(soc[0].number),
      data: this.getData(this.calculate(soc[0].number))
    };
  }
  
  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  calculate(number) {
    return Math.floor( (this.props.signatures/number)*100 );
  }

  componentDidMount() {
    let count = 1;

    this.setStateInterval = window.setInterval(() => {
      count = (count >= soc.length) ? 0 : count;

      let percent = this.calculate(soc[count].number);
      let text = soc[count].text;

      this.setState({
        subject: text,
        percent, 
        data: this.getData(percent)
      });

      count++;

    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  render() {
    return (
      <div className="Venstre">
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
                  const color = d.y > 30 ? "#5cb94d" : "#005392";
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

        <header className="header">
          <h1 className="title">{this.state.subject}</h1>
        </header>

        <Table 
          data={soc}
          signatures={this.props.signatures}
        />

      </div>
    );
  }
}

export default Venstre;
