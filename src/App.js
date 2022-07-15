import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import CarritoContainer from './components/CarritoContainer/CarritoContainer';
import ItemListContainer from './Container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Carrito } from './Context/CarritoContext';
import './App.css';
import './font.css';

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
        <Footer />
      </Router>
    </Carrito>

  );
}

export default App;
