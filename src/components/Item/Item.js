import React, { useState } from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom';
const Item = ({ item }) => {
    let navigate = useNavigate()
    const handleLink = (id) => {
        navigate(`/item/${id}`)
    }
    return (
                <div className="col-md-4 shop__item">
                    <div className="p-5 my-3 text-light">
                        <img className="img-fluid" src={item.imgSrc} height="100%"></img>
                        <h5>{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">${item.price}</p>
                        <div className="d-flex justify-content-center">
                            <button onClick={() => handleLink(item.id)} className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
    )
}

export default Item