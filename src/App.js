import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0)

  const manejarClick = () => {
    setNumClicks(numClicks + 1)
  }

  let reiniciarContador = () => {
    setNumClicks(0)
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <h1>
          Contador de Clicks
        </h1>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>
        <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick}/>
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
