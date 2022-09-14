import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { libros } from '../Data/manuales.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Manuales = ({items}) => {
    console.log(items);
    return (
        <>
            <ItemListContainer items={items} />
        </>
    );
}

export default Manuales;