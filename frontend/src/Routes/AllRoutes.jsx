import React from 'react';
import { Routes, Route } from 'react-router-dom'
import GameBoard from '../Components/GameBoard';
import Home from '../Components/Homepage';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/game' element={<GameBoard/>}/>
        </Routes>
    );
};

export default AllRoutes;