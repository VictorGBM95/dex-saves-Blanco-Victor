import { useEffect, useState, useContext } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { libros } from '../Data/manuales.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContext } from '../context/cartContext';

const Manuales = ({items}) => {

    return (
        <>
            <ItemListContainer category={"manuales"} items={items} />
        </>
    );
}

export default Manuales;