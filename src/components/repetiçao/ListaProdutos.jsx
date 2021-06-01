import React from "react";
import './TabelaProdutos.css';
import produtos from "../../data/produtos";

function getLinhas() {
  return produtos.map((produto, i) => {
    return (
      <tr className={i % 2 === 0 ? 'Par' : 'Impar'}>
        <td>{produto.id}</td>
        <td>{produto.produto}</td>
        <td>R$ {produto.preço.toFixed(2).replace('.', ',')}</td>
      </tr>
    )
  })
}
export default (props) => {
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>

        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};
