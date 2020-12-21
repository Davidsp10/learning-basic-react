import React from 'react';
import './assets/css/App.css';

//Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Router from './Router'
import SecccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';

function App() {

  return (
    <div className="App">

      
        {/* <Peliculas/> */}
        {/* <SecccionPruebas/> */}
        <Router/>

        
    </div>
  );
}

export default App;
