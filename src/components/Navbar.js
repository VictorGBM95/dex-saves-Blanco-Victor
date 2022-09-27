import React from "react";
import CartWidget from "../components/CartWidget";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <header id="top" className="container-fluid d-flex justify-content-around">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="index.html"><img src="/images/D20Logo.png" alt="D20Logo" width="30" height="24" className="d-inline-block align-text-top"/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav d-flex justify-content-around" style={{"width": '100%'}}>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/" element={<></>}> Home </Link> 
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="category/manuales/" element={<></>}> Manuales </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="category/dados/" element={<></>}> Dados </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="category/miniaturas/" element={<></>}> Miniaturas </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="category/contacto/" element={<></>}> Contáctanos </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="cart/" element={<></>}> <CartWidget /> </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    )
}