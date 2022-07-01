import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import CarritoContainer from './components/CarritoContainer/CarritoContainer';
import ItemListContainer from './Container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Carrito } from './Context/CarritoContext';
import './App.css';

function App() {
  return (
    <Carrito>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/item/:id/:nombre' element={<ItemDetailContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer mensaje={"Catálogo"} />} />
          <Route path='/cart' element={< CarritoContainer />} />
          <Route path='/Ecommerce' element={<ItemListContainer mensaje={"Catálogo de Productos"} />} />
          <Route path='/' element={<ItemListContainer mensaje={"Catálogo de Productos"} />} />
        </Routes>
      </Router>
    </Carrito>

  );
}

export default App;
