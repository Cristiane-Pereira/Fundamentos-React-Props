import React from 'react'

export default (props) => {
const numPar = props.numero % 2 === 0

    return (
        <div>
            {numPar ? <span>Par</span> : <span>Impar</span>}
        </div>
    )
}