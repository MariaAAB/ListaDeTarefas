import React from 'react'

function Select(props:any){
  return (
    <div>
       <select value={props.value} onChange={e=>props.setDiaSemana(e.target.value)} >
        <option value=''>Escolha um dia da semana</option>
        <option value='Domingo'>Domingo</option>
        <option value='Segunda'>Segunda-feira</option>
        <option value='terca'>Terca-feira</option>
        <option value='Quarta'>quarta-feira</option>
        <option value='Quinta'>quinta-feira</option>
        <option value='Sexta'>Sexta-feira</option>
        <option value='Sabado'>Sabado</option>
      </select>
    </div>
  )
}

export default Select
