import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Tic Tak Toe</h1>
            <Link to={'/game'}>Start New game</Link>
        </div>
    );
};

export default Home;