import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWeb from './AppWeb';
import { BrowserRouter } from 'react-router-dom';
import './navbar.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <BrowserRouter>
        <AppWeb/>
        </BrowserRouter>,
);
