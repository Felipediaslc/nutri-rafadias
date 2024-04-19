import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Menu from './Componentes/Menu/Menu';





import Routes from './Router'


function App() {
  return (

<>
    <BrowserRouter >
    <Menu />
   
    <Routes />
 
    </BrowserRouter>
   
    </>
  );
}

export default App;
