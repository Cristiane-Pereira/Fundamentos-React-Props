import React from 'react'

import alunos from '../../data/alunos'
// const li1 = (
//   <li>
//     {alunos[0].id}  {alunos[0].nome} {alunos[0].nota}
//   </li>
// );

const listAlunos = alunos.map((aluno) =>{
    return (
      <li key={aluno.id}>
        {aluno.id} {')'} {aluno.nome} {'->'} {aluno.nota}
      </li>
    );
});

export default props => {
   return (
     <div>
         <ul style={{listStyle: 'none'}}>
             {listAlunos}
         </ul>
     </div>
   );
}