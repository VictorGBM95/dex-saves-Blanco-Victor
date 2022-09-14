import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
const Details = ({items}) => {
    const location = useLocation()
    const id = location.pathname.slice(-1)
    const product = items.find((item) => item.id == id) 

    return (
        <>
            <ItemDetailContainer item={product} />
        </>
    );
}

export default Details;