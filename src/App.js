import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/item/:id/:nombre' element={<ItemDetailContainer />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer mensaje={"Catálogo"} />} />
        <Route path='/Ecommerce' element={<ItemListContainer mensaje={"Catálogo de Productos"} />} />
        <Route path='/' element={<ItemListContainer mensaje={"Catálogo de Productos"} />} />
      </Routes>
    </Router>

  );
}

export default App;
