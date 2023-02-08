
import './App.css';
import Mensaje from './Mensaje';

function App() {
  const a = 2
  const b = 3
  return (
    <div className="App">
      <h1>Titulo de la app</h1>
      <strong>Estamos trabajando en ello</strong>
      <br />
      <div>
        <p>El resultado es: </p>
        {a+b}
      </div>
      <Mensaje color="yellow" message = 'Mi mamá es hermosa' />
      <Mensaje color="blue" message = "	(͡ ° ͜ʖ ͡ °)"/>
      <Mensaje color="red" message = "ψ(｀∇´)ψ"/>
    </div>
  );
}

export default App;
