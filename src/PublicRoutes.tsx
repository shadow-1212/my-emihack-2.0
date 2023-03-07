import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './public/pages/Landing';
import Login from './auth/Login';
import PageNotFound from "./shared/pages/PageNotFound";

const PublicRoutes = () => {
    return (
        <Routes>
            //define all routes here
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>

        );
};

export default PublicRoutes;
