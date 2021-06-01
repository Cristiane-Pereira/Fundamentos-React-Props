import React from 'react'

export default (props) => {
    return (
        <div>
            <span>{props.texto} </span>
            <span>{props.idade} </span>
            <span><b>{props.boolean ? 'Verdadeiro' : 'False'}!</b></span>
        </div>
    )
}