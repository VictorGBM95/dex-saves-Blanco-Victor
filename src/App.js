import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Miniaturas from './screens/Miniaturas';
import Dados from './screens/Dados';
import Manuales from './screens/Manuales';
import Details from './screens/Details';
import { CartContext } from './context/cartContext';
import Cart from './screens/Cart';
import firestoreFetch from './utils/firestoreFetch';
import Home from './screens/Home';
import Contacto from './screens/Contacto';

const App = () => {
  const [carrito, setCarrito] = useState([]);
  const [products, setProducts] = useState([]);
  const location = useLocation()
  const getProductsByURL = (pathname) => {
    switch (pathname) {
      case `/category/manuales/`:
        hacerLlamada("books")
        break;
      case `/category/dados/`:
        hacerLlamada("dados")
        break;
      case `/category/miniaturas/`:
        hacerLlamada("minis")
        break;
    }
  }

  const inCart = (id, categoria) => !!carrito.find((e) => e.item.id == id && e.item.category == categoria)

  const deleteItem = (id, categoria) => {
    const nuevoCart = carrito.filter((e) => `${e.item.id}-${e.item.category}` !== id + "-" + categoria)
    setCarrito(nuevoCart)
  }
  const emptyCart = () => {
    setCarrito([])
  }

  useEffect(() => {
    getProductsByURL(location.pathname)
  }, [location.pathname]);
  const hacerLlamada = (producto) => {

    const llamada = new Promise((resolve, reject) => {
      resolve(firestoreFetch(producto));
    });

    llamada.then(result => {
      setProducts(result)
    });
  }

  return (
    <CartContext.Provider value={
      {
        carrito,
        setCarrito,
        inCart,
        deleteItem,
        emptyCart,
      }
    }>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='category/manuales/' element={<Manuales items={products} />} />
        <Route path='category/dados/' element={<Dados items={products} />} />
        <Route path='category/miniaturas/' element={<Miniaturas items={products} />} />
        <Route path='category/contacto/' element={<Contacto/>} />
        <Route path='item/:id/' element={<Details items={products} />} />
        <Route path='cart/' element={<Cart />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;