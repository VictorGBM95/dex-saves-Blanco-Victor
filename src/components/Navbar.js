import React from "react";
import CartWidget from "../components/CartWidget";
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
                                        <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pag/Manuales.html">Manuales</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pag/Dados.html">Dados</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pag/Minis.html">Miniaturas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pag/Contacto.html">Contáctanos</a>
                                    </li>
                                    <CartWidget />
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