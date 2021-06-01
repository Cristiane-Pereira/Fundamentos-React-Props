import React from 'react';

import './style.css';

export default (props) => {
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    return (
        <div>
          <div>
              Filho
          </div>
          <button onClick= {
              function (e) {
                  props.quandoClicar('Pedro', gerarIdade(), true)
              }
          }>FORNECER INFORMAÇÕES</button>
        </div>
    )
}