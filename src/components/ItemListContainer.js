import { useEffect, useState, useContext } from 'react';
import ItemCount from "./ItemCount/ItemCount";
import Item from "./Item/Item";
import { CartContext } from '../context/cartContext';
const ItemListContainer = ({items, category}) => {
    const contexto = useContext(CartContext)

    return (
        <div className="container-lg my-4 main">
        <div className="row">
        {
            items && items.length > 0 && items.map((item) => {
                const isInCart = contexto.inCart(item.id, category)
                console.log(isInCart);
                return(
                    <Item isInCart={isInCart} item={item} />
                )
            })
        }
        </div>
        </div>
    );
}
export default ItemListContainer;