import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/producto/" >
        </Route>
        <Route path='/' >
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
