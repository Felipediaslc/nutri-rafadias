/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home01 from './Pages/Home/Home';
import Servicos from './Pages/Servico/Servico';
import Servico01 from './Pages/Servico/Servico01'
import Quemsou from './Pages/Quemsou/Quemsou';






export default () => {
    return (
    <Routes>
        <Route  path="/" element={ <Home01 /> } />
        <Route  path="/quemsou" element={ <Quemsou /> } />
        <Route  path="/servico" element={ <Servicos /> } />
    

        <Route  path="/sevico01" element={ <Servico01 /> } />
        
        
      </Routes>
    );
}