import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './views/Home';
import Concept from './views/Concept';
import Reservation from './views/Reservation';
import Join from './views/Join';
import Payment from './views/Payment';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/join' element={<Join />} />
    <Route path='/concept' element={<Concept />} />
    <Route path='/reservation' element={<Reservation />} />
    <Route path='/Payment' element={<Payment />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;