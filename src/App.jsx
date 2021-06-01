import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repetiçao/ListaAlunos";
import ListaProdutos from "./components/repetiçao/ListaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulário/input";
import Contador from "./components/contador/contador";
import ContadorTwo from "./components/contador/contador2";
import Mega from "./components/mega/Mega";

import "./App.css";

export default (props) => {
  return (
    <div class="App">
      <h1>Fundamentos react</h1>
      <div className="exercicios">
        <Card titulo="#13 - Números Mega Sena" color="#999900">
          <Mega />
        </Card>

        <Card titulo="#12 - Contador Componentizado" color="#330033">
          <ContadorTwo numeroInicial={10} />
        </Card>

        <Card titulo="#11 - Contador" color="#993399">
          <Contador numeroInicial={10} />
        </Card>

        <Card titulo="#10 - Componente Controlado(Input)" color="#006666">
          <Input />
        </Card>

        <Card titulo="#09 - Comunicação Indireta" color="#ff0066">
          <IndiretaPai />
        </Card>

        <Card titulo="#08 - Comunicação Direta" color="#0367A3">
          <DiretaPai />
        </Card>

        <Card titulo="#07 - Renderização Condicional" color="#F9847A">
          <ParOuImpar numero={10} />
          <UsuarioInfo usuario={{ nome: "Cristiane" }} />
          <UsuarioInfo usuario={{ email: "cris@silva.com" }} />
        </Card>

        <Card titulo="#06 - Repetição Tabela Produtos" color="#057c5c">
          <ListaProdutos />
        </Card>

        <Card titulo="#05 - Repetição Alunos" color="#F803C8">
          <ListaAlunos />
        </Card>

        <Card titulo="#04 - Componentes com Filhos" color="#9854BB">
          <Familia sobrenome="Fernandes Silva">
            <FamiliaMembro nome="Pedro"></FamiliaMembro>
            <FamiliaMembro nome="Cristiane"></FamiliaMembro>
            <FamiliaMembro nome="Vitor"></FamiliaMembro>
            <FamiliaMembro nome="Fernando"></FamiliaMembro>
            <FamiliaMembro nome="Luana"></FamiliaMembro>
            <FamiliaMembro nome="Mauricio"></FamiliaMembro>
          </Familia>
        </Card>

        <Card titulo="#03 - Desafio Aleatório" color="#00FCFD">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#E2A0B4">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Cristal Silva"
            nota={0 - 0}
          />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
