import React, { useState } from "react";

import "./input.css";

export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }
  return (
    <div className="input">
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label id="label">Componente controlado por estado!!</label>
        <input value={valor} onChange={quandoMudar} />

        <label id="label">Componente só para leitura!!</label>
        <input value={valor} readOnly />

        <label id="label">Componente não vinculado por estado!!</label>
        <input value={undefined} />
      </div>
    </div>
  );
};
