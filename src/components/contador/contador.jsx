import React, { Component } from "react";
import "./contador.css";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 10,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };
  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (event) => {
    this.setState({
      passo: +event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        {/* <p>Valor Inicial: {this.props.numeroInicial}</p> */}
        <h3>{this.state.numero}</h3>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input
            id="passoInput"
            type="number"
            value={this.state.passo}
            onChange={this.setPasso}
          ></input>
        </div>
        <button className="btn-contador" onClick={this.inc}>
          +
        </button>
        <button className="btn-contador" onClick={this.dec}>
          -
        </button>
      </div>
    );
  }
}

export default Contador;
