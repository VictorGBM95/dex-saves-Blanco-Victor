import React from "react";
import "./Navbar.css"
import CartWidget from "../CartWidget";
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <header id="top" className="container-fluid d-flex justify-content-around">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="container-fluid">
                                <a className="navbar-brand" href=""><img src="/images/D20Logo.png" alt="D20Logo" width="30" height="24" className="d-inline-block align-text-top" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav d-flex justify-content-around" style={{ "width": '100%' }}>
                                        <li className="nav-item">
                                            <NavLink className={({isActive})=>{
                                                return isActive ? "active":undefined
                                            }} to="/" end> Home </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({isActive})=>{
                                                return isActive ? "active":undefined
                                            }} to="category/manuales/"> Manuales </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({isActive})=>{
                                                return isActive ? "active":undefined
                                            }} to="category/dados/"> Dados </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({isActive})=>{
                                                return isActive ? "active":undefined
                                            }} to="category/miniaturas/"> Miniaturas </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({isActive})=>{
                                                return isActive ? "active":undefined
                                            }} to="category/contacto/"> Contáctanos </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({isActive})=>{
                                                return isActive ? "active":undefined
                                            }} to="cart/"> <CartWidget /> </NavLink>
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