import React from 'react';

import If from './if.js';

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
            Seje bem Vindo <strong>{usuario.nome}</strong>!
            </If>
            <If test={!usuario || !usuario.nome}>
            Seje bem Vindo <strong>Novo Usuário</strong>!
            </If>
        </div>
    );
}