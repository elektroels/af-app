import React, { Component } from 'react';
import './Table.css';

class Table extends Component {

  calculate(number) {
    return Math.floor( (this.props.signatures/number)*100 );
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Begivenhed</th>
            <th>Antal</th>
            <th>Procent</th>
            <th>Kilde</th>
          </tr>
          {
            this.props.data.map((evnt, index) => (
              <tr>
                <td>{evnt.subject}</td>
                <td>{evnt.number}</td>
                <td>{this.calculate(evnt.number)}%</td>
                <td><a href={evnt.source}>www</a></td>
              </tr>
            ))
          } 
        </tbody>
      </table>
    );
  }
}

export default Table;
