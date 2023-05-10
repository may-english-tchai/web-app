import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './views/Home';
import Concept from './views/Concept';
import Reservation from './views/Reservation';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/concept' element={<Concept />} />
    <Route path='/reservation' element={<Reservation />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;