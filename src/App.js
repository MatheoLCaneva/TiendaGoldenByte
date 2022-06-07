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
        <Route path='/productos/:id/:nombre' element={<ItemDetailContainer />} />
        <Route path='/' element={<h1 style={{ textAlign: "center" }}> Este seria el inicio </h1>} />
        <Route path='/productos' element={<ItemListContainer mensaje={"Catalogo de Productos"} />} />
      </Routes>
    </Router>

  );
}

export default App;
