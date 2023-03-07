import React from 'react';
import { Routes, Route } from 'react-router-dom';
//? import here the components that will be used in the  admin routes
import Dashboard from "./admin/pages/Dashboard";
import PageNotFound from "./shared/pages/PageNotFound";

const AdminRoutes: React.FC = () => {
    return (
        <Routes>
            //define all routes here
            <Route path="/" element={<Dashboard/>} />
            <Route path="*" element={<PageNotFound/>} />

        </Routes>

    );
};

export default AdminRoutes;
