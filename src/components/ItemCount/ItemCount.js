import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({handleCounter}) => {
    const [counter, setCounter] = useState(1);
    const limiteStock = 5;

    const handleClick = (value) => {
        const nuevoCounter = value + counter;
        if (nuevoCounter > 0 && nuevoCounter <= limiteStock) {
            setCounter(nuevoCounter)
        }
    }

    const cartAdd = () => {
        handleCounter(counter)
    }

    return (
        <div className='item-count-container'>
            <div>
                <div className='item-count'>
                    <label onClick={() => handleClick(-1)}>-</label>
                    <label>{counter}</label>
                    <label onClick={() => handleClick(1)}>+</label>
                </div>
            </div> 
            <div className='item-count-button-container'>
                <button className='btn btn-primary' onClick={() => cartAdd()}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount