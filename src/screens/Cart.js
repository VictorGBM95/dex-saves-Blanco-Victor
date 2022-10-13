import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { serverTimestamp, doc, setDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
const Cart = ({ }) => {
    const items = useContext(CartContext)
    const createOrder = async () => {
        const order = {
            buyer: {
                name: "Erwe Von Esse",
                email: "erwevonesse@gmail.com",
                phone: "55542069"
            },
            date: serverTimestamp(),
            items: items.carrito.map((producto) => {
                return({
                    id: producto.item.id,
                    title: producto.item.title,
                    price: producto.item.price,
                    quantity: producto.cantidad,
                })
            }) ,
        }
        const newOrderId = doc(collection(db, "orders"))
        await setDoc(newOrderId, order);
        alert('Your order was succesfully created!')
        items.emptyCart()

    }

    return (
        <CartContext.Consumer>
            {
                (contexto) => {
                    return (
                        <main style={{ fontWeight: "800", background: "rgb(54, 0, 0, 0.8)" }}>
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
                                                    <p className="card-text">${e.item.price * e.cantidad}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="total-btn">
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h1>Total</h1>
                                    <div id="total"></div>
                                    <button onClick={createOrder} className="btn btn-primary" type="button" id="btn-compra">Finalizar Compra</button>
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