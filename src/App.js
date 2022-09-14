import { useEffect, useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import { libros } from './Data/manuales.js';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Miniaturas from './screens/Miniaturas';
import Dados from './screens/Dados';
import Manuales from './screens/Manuales';
import Details from './screens/Details';
import { minis } from './Data/minis.js';
import { dados } from './Data/dados.js';

const App = () => {
  const [products, setProducts] = useState([]);
  const [api, setApi] = useState();
  const location = useLocation()
  const getProductsByURL = (pathname) => {
    switch (pathname) {
      case `/category/manuales/`:
        setApi(libros)
        break;
      case `/category/dados/`:
        setApi(dados)
        break;
      case `/category/miniaturas/`:
        setApi(minis)
        break;
    }
  }

  useEffect(() => {
    getProductsByURL(location.pathname)
  }, [location.pathname]);
  useEffect(() => {
    
    const llamada = new Promise((resolve, reject) => {
      setTimeout(() => resolve(api), 3000);
    });

    llamada.then(result => {
      setProducts(result)
    });
  }, [api]);

  console.log(products);
  return (
    <Routes>
      {/* <Route index element={<App />}/> */}
      <Route path='category/manuales/' element={<Manuales items={products} />} />
      <Route path='category/dados/' element={<Dados items={products} />} />
      <Route path='category/miniaturas/' element={<Miniaturas items={products} />} />
      <Route path='category/contacto/' element={<></>} />
      <Route path='item/:id/' element={<Details items={products} />} />
    </Routes>
  );
}

export default App;