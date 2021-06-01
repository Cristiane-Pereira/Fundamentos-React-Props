import React from 'react';

export default props => {
  return (
      <div>
        <button className="btn-contador-2" onClick={props.setInc}>+</button>
        <button className="btn-contador-2" onClick={props.setDec}>-</button>
      </div>
  )
}