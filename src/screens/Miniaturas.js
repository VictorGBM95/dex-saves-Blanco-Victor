import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { minis } from '../Data/minis.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Miniaturas = ({items}) => {

    return (
        <>
            <ItemListContainer items={items} />
        </>
    );
}

export default Miniaturas;