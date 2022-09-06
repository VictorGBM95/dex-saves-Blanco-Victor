import React, {useState} from 'react'
import './ItemCount.css'
const ItemCount = () => {
    const [counter, setCounter] = useState(0);

    const limiteStock = 5;

    const handleClick = (value) => {
        const nuevoCounter = value + counter;
        if (nuevoCounter > -1 && nuevoCounter <= limiteStock) {
            setCounter(nuevoCounter)
        }
    }

    const cartAdd = () => {
        alert(
            `Se han agregado ${counter} productos al carrito!`
        )
    }

    return (
        <div className='item-count-container'>
            <div>
                <p>Player's Handbook</p>
            </div>
            <div>
                <div className='item-count'>
                    <label onClick={() => handleClick(-1)}>-</label>
                    <label>{counter}</label>
                    <label onClick={() => handleClick(1)}>+</label>
                </div>
            </div> 
            <div className='item-count-button-container'>
                <button onClick={cartAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount