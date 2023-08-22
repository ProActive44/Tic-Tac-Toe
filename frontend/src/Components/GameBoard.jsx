import React, { useState } from 'react';
import Square from './Square';

const GameBoard = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares)
    let status;
    if(winner){
        status = `Winner: ${winner}`
    }
    else if(squares.every((sqaure)=>sqaure!==null)){
        status = `Draw`
    }
    else{
        status = `Next Player: ${xIsNext? 'X' : 'O  '}`
    }

    const handleClick = (idx)=>{
        if(squares[idx] || calculateWinner(squares)){
            return;
        }       

        const newSquares = squares.slice()
        newSquares[idx] = xIsNext ? 'X' : 'O'
        setSquares(newSquares)
        setXIsNext(!xIsNext)
    }
    
    return (
        <div className='game-board'>
            <div className='status'>{status}</div>
            <div className='board'>
                {
                    squares.map((square, idx)=>{
                        return <Square data-testid={`button-${idx+1}`} key={idx} value={square} onClick={()=>handleClick(idx)}></Square>
                    })
                }
            </div>
            <div>
                {
                    (
                        <button data-testid='start' onClick={()=>setSquares(Array(9).fill(null))}>
                            Start New Game
                        </button>
                    )
                }
            </div>
        </div>
    );
};

let calculateWinner = (squares)=>{
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]

    for(const [a, b, c] of lines){
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null;
}

export default GameBoard;