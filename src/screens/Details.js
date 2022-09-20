import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, useLocation, useNavigate } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
const Details = ({items}) => {
    const [itemQty, setItemQty] = useState(0)
    const location = useLocation()
    const navigate = useNavigate()
    const id = location.pathname.slice(-1)
    const product = items.find((item) => item.id == id) 
    const handleCounter = (qty) => {
        setItemQty(qty)
        navigate('/cart')
    }
    return (
        <>
            <ItemDetailContainer item={product} handleCounter={handleCounter} />
        </>
    );
}

export default Details;