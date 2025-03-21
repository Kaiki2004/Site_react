
import { useState } from "react";
import Nome from "./Componentes/Nome";


function App() {
  const [aluno, setAluno] = useState('Marcos');

  function handleChangeName(nome){
    setAluno(nome);
  }
  return (
    <div className="App">
      <h1>Primeiro Site</h1>
      <Nome aluno = {aluno}/>
      <br/>
      <button onClick={ () => handleChangeName('Kaiki')}>Alterar Nome</button>
    </div>
  );
}

export default App;

