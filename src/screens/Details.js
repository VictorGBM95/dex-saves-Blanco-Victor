import { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Switch, Route, useLocation, useNavigate } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { CartContext } from '../context/cartContext';
const Details = ({items}) => {
    const context = useContext(CartContext)
    const location = useLocation()
    const navigate = useNavigate()
    const id = location.pathname.slice(6)
    const product = items.find((item) => item.id == id) 
    const handleCounter = (qty) => {
        context.setCarrito([...context.carrito, {item:product, cantidad:qty}])
        navigate('/cart')
    }
    console.log(id, items);
    return (
        <>
            <ItemDetailContainer item={product} handleCounter={handleCounter} />
        </>
    );
}

export default Details;