import { useEffect, useState } from 'react';
import './App.css';
import { IListaTarefas } from './types';
import { Button, Container,  Row,  Titulo } from './styles';
import Select from './Components/Select';


function App() {
 const [listaTarefas,setListaTarefas] = useState<IListaTarefas[]>([])
 
 const [descricao,setDescricao] = useState<string>('')  
 const [diaSemana,setDiaSemana] = useState<string>("")
 
 const Adicionar=()=>{
  if( descricao === '' || diaSemana === ''){
    alert('Descricao ou dia da Semana em Branco')
    return 
  }
    const item:IListaTarefas={
      descricao:descricao,
      diaSemana:diaSemana

    }
    const ItemNaLista = ItemJaEstaNaLista(item,listaTarefas)
    if(ItemNaLista){
      alert("Esta na lista")
    } else{
      setListaTarefas([...listaTarefas,item])
      setDescricao("")
      setDiaSemana("")
    

    }

   
  }
  
    const ItemJaEstaNaLista = (item:IListaTarefas,listaTarefas:IListaTarefas[]): boolean =>{
     const itemLista = listaTarefas.find ((listaTarefas) => 
      item.descricao === listaTarefas.descricao && item.diaSemana === listaTarefas.diaSemana)
      return !!itemLista
   
    }

    const Excluir= (index:number) =>{

      var novaLista = listaTarefas
      novaLista.splice(index,1)
      console.log(novaLista)
      setListaTarefas([...novaLista])
    }

    useEffect(() =>{
     console.log('lista',listaTarefas)
    },[listaTarefas])
  return (
    <Container>
    <div>
      <Titulo>Lista de Tarefas !</Titulo>
      <input type='text' value={descricao} placeholder='Descrição' onChange={e=> setDescricao(e.target.value)} />
     
    </div>
     <Select value={diaSemana} setDiaSemana={setDiaSemana}/>
        <Button onClick={Adicionar}>Adicionar</Button>
      <div>
        <Row>
        <p>Descricao</p>
        <p>Dia da Semana</p>
        <p>Excluir</p>

        </Row>
        {listaTarefas.map((item,index)=>(
            <Row key={index}>
              <p>{item.descricao}</p>
              <p>{item.diaSemana}</p>
              <div>
                <button onClick={() => Excluir(index)}>Excluir</button>

              </div>
            </Row>
        ))}
        
      </div>
      
      
    </Container>
  );
}

export default App;

