import React from "react";

export default (props) => {
  return (
    <div>
      <div>
        <label htmlFor="passoInput">Passo: </label>
        <input
          id="passoInput"
          type="number"
          value={props.passo}
          onChange={event => props.setPasso(+event.target.value)}
        ></input>
      </div>
    </div>
  );
};
