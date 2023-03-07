import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './public/Landing';
import Login from './auth/Login';

const PublicRoutes: typeof Route = () => {
    return (
        <Routes>
            //define all routes here
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>

        );
};

export default PublicRoutes;
