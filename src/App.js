import { useEffect, useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import { Navbar } from './components/Navbar';
import { libros } from './Data/manuales.js'; 

const App = () => {
  const [manuales, setManuales] = useState([]);

  useEffect(() => {
    const llamada = new Promise((resolve, reject) => {
      setTimeout(() => resolve(libros),3000);
    });

    llamada.then(result => {
      setManuales(result)
    });

  }, []);
console.log(manuales);
  return (
    <>
      <Navbar />
      <ItemListContainer manuales={manuales} />
    </>
  );
}

export default App;