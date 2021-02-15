import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

const Router = () => {
    return (
        <>
        <Navbar />
        <div>
            Hello World
        </div>
        </>
    )
}

export default Router
