import React, { useState } from 'react'
import './Item.css'
const Item = ({ manual }) => {
    console.log(manual);
    return (
                <div className="col-md-4 shop__item">
                    <div className="p-5 my-3 text-light">
                        <img className="img-fluid" src={manual.imgSrc} height="100%"></img>
                        <h5>{manual.title}</h5>
                        <p className="card-text">{manual.description}</p>
                        <p className="card-text">${manual.price}</p>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
    )
}

export default Item