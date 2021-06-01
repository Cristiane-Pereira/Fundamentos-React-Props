import React, { useState } from "react";

import IndiretaFilho from "./IndiretaFilho";

export default props => {
const [nome, setNome] = useState('?');
const [idade, setIdade] = useState(0);
const [nerd, setNerd] = useState(false);
    function fornecerInformacoes (nome, idade, nerd) {
      setNome(nome)
      setIdade(idade)
      setNerd(nerd)
    }
  return (
    <div>
      nome do pai: <span> {nome} </span> <br />
      idade: <span> <strong> {idade} </strong></span> <br />
      seu pai é nerd? <span> {nerd ? 'Verdade' : 'False'} </span>

      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
