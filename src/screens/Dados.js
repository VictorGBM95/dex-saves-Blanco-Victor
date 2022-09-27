import { useEffect, useState, useContext } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { dados } from '../Data/dados.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContext } from '../context/cartContext';


const Dados = ({items}) => {

    return (
        <>
            <ItemListContainer category={"dados"} items={items} />
        </>
    );
}

export default Dados;