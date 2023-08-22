import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home';
import GameBoard from '../Components/GameBoard';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/game' element={<GameBoard/>}/>
        </Routes>
    );
};

export default AllRoutes;