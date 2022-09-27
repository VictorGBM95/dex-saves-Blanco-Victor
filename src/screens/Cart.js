import React from "react";
import { CartContext } from "../context/cartContext";
const Cart = ({ }) => {

    return (
        <CartContext.Consumer>
            {
                (contexto) => {
                    return (
                        <main style={{fontWeight: "800", background: "rgb(54, 0, 0, 0.8)"}}>
                            <h1 className="d-flex flex-column align-items-center">Carrito</h1>
                            <div id="carrito">
                                {
                                    contexto.carrito.map((e, i) => {
                                        console.log(e);
                                        return (
                                            <div className="producto-del-carro">
                                                <div class="img-carrito">
                                                    <img src={e.item.imgSrc} />
                                                </div>
                                                <div className="texto-carrito">
                                                    <p>{e.item.title}</p>
                                                    <p>{e.item.description}</p>
                                                    <button onClick={() => contexto.deleteItem(e.item.id, e.item.category)} className="btn btn-primary" id="manuales-5">Eliminar</button>
                                                </div>
                                                <div className="cantidad-carrito text-light">
                                                    <h3>{e.cantidad}</h3>
                                                </div>
                                                <div className="precio-carrito text-light">
                                                    <p className="card-text">${e.item.price*e.cantidad}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="total-btn">
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <h1>Total</h1>
                                    <div id="total"></div>
                                    <button className="btn btn-primary" type="button" id="btn-compra">Finalizar Comprar</button>
                                    <button onClick={() => contexto.emptyCart()} className="btn btn-primary" type="button" id="btn-compra">Vaciar el Carrito</button>
                                </div>
                            </div>
                        </main>
                    )
                }
            }
        </CartContext.Consumer>
    );
}
export default Cart;