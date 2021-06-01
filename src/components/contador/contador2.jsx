import React, { Component } from "react";
import "./contador.css";

import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

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

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div>
        <h2>Contador 2</h2>
        {/* <p>Valor Inicial: {this.props.numeroInicial}</p> */}
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Botoes setInc={this.inc} setDec={this.dec} />
      </div>
    );
  }
}

export default Contador;
