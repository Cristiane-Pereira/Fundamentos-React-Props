import React, { cloneElement } from 'react';

export default props => {
    return (
       <div>
           {
               React.Children.map(props.children, (child) => {
                   return cloneElement(child, props)
               })
            }
           {/* <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}></FamiliaMembro> dessa maneira tbm, se passa o valor de uma props.
           <FamiliaMembro nome="Cristiane" sobrenome="Silva"></FamiliaMembro> dessa maneira se passa uma props. 
           <FamiliaMembro nome="Vitor"{...props} ></FamiliaMembro> desse modo passa-se todos os atibutos declarados em uma props.
           <FamiliaMembro nome="Fernando" sobrenome="Souza"></FamiliaMembro>
           <FamiliaMembro nome="Luana" sobrenome="Gabrielly"></FamiliaMembro>
           <FamiliaMembro nome="Mauricio" sobrenome="Carlos"></FamiliaMembro> */}
       </div>
    );
}