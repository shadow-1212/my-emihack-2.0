import React from 'react';
import { Routes, Route } from 'react-router-dom';
//? import here the components that will be used in the  admin routes
import Dashboard from "./admin/Dashboard";
import Login from "./auth/Login";

const AdminRoutes: React.FC = () => {
    return (
        <Routes>
            //define all routes here
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>

    );
};

export default AdminRoutes;
