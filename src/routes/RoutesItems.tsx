import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home';

const RoutesItems = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default RoutesItems;

