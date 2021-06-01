import React from "react";

import "./Card.css";

export default (props) => {
  const style = {
    backgroundColor: props.color || '#00FD05',
    borderColor: props.color || '#00FD05'
  }
  return (
    <div className="Card" style={style}>
      <div className="title"> {props.titulo}</div>
      <div>
        <div className="Content"> {props.children} </div>
      </div>
    </div>
  );
};
