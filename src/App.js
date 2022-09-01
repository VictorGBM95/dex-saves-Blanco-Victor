import ItemListContainer from './components/ItemListContainer';
import {Navbar} from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Hola Mundo ItemListContainer!" />
    </>
  );
}

export default App;