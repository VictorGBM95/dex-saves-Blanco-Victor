import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <App />
    </BrowserRouter>
  </React.StrictMode>
);