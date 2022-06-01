import NavBar from './components/navbar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import './App.css';

function App() {
  return (

    <>
      <NavBar/>
      <ItemListContainer mensaje = "Catálogo de Productos"/>
    </>
    
  );
}

export default App;
