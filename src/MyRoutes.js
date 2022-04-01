import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout';
import Home from './pages/Home'
import Products from './pages/Products';
import About from './pages/About';

const MyRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route element={<Home/>}/>
                <Route element={<About/>}/>
                <Route element={<Products/>}/>
            </Route>

        </Routes>
    );
};

export default MyRoutes;