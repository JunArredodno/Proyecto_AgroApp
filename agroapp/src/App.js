import './App.css';
import React, {useState} from 'react';
import Home from './Home';
import Header from './Header'
import Micuenta from './components/inicioSesion/Micuenta';
//import Mi_cuenta from './Mi_cuenta';

function App() {

  const [conectado, setConectado]=useState(false);
  
  const acceder=(estado)=>{
    setConectado(estado)
  }

  return (
    conectado ? <div className="app"> 
      <Header/>
      <Home />
    </div> : <Micuenta acceder={acceder} />
    
  );
}

export default App;
