import logo from './logo.svg';
import NavBar from './components/navBar';
import ItemListContainer from './container/itemListContainer';
import './App.css';

function App() {
  return (

    <>
      <NavBar/>
      <ItemListContainer mensaje = "¡Acá va a ir mi catalogo proximamente!"/>
    </>
    
  );
}

export default App;
