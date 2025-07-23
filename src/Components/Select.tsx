import React from 'react';

function Select(props:any){
  return (
    <div>
      <p>Escolha um dia da semana</p>
       <select value={props.value} onChange={e=>props.setDiaSemana(e.target.value)} >
        <option value=''>Escolha um dia da semana!</option>;
        <option value='Domingo'>Domingo</option>;
        <option value='Segunda'>Segunda-feira</option>;
        <option value='Terca'>Terca-feira</option>;
        <option value='Quarta'>Quarta-feira</option>;
        <option value='Quinta'>Quinta-feira</option>;
        <option value='Sexta'>Sexta-feira</option>;
        <option value='Sabado'>Sabado</option>;
      </select>

    </div>
  );
};

export default Select;
