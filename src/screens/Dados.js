import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { dados } from '../Data/dados.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Dados = ({items}) => {
    return (
        <>
            <ItemListContainer items={items} />
        </>
    );
}

export default Dados;