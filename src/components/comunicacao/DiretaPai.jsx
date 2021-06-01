import React from 'react'

import DiretaFilho from './DiretaFilho'

export default (props) => {
    return (
        <div>
            <h2>Pai para Filho</h2>
          <DiretaFilho texto="(Filho 1)" idade={20 + 'Anos'} boolean={true} />
          <DiretaFilho texto="(Filho 2)" idade={7 + 'Anos'} boolean={false} />
          <DiretaFilho texto="(Filho 3)" idade={2 + 'Anos'} boolean={true} />
        </div>
    )
}