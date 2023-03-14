import './App.css';

import Mensagem from './Mensagem';

const Description = () =>{
  return <p>Esta é o meu primeiro projeto em React</p>
}

const App = () => {
  
  return (
    <div className="App">
      <Mensagem  color = 'red' leitura ="testando parametros"/>
      <Mensagem  color = 'blue' leitura = 'quero ver se funciona'/>
      <Mensagem color = 'green' leitura = 'será que com crase tbm funciona'/>
      <Mensagem />
      <Description />
    </div>
  );
}

export default App;
