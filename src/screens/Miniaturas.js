import { useEffect, useState, useContext } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { minis } from '../Data/minis.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContext } from '../context/cartContext';


const Miniaturas = ({items}) => {
    return (
        <>
            <ItemListContainer category={"minis"} items={items} />
        </>
    );
}

export default Miniaturas;