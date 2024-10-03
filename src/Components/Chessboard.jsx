import React, { useEffect, useState } from 'react';
import './Chessboard.css';

const Chessboard = () => {
    const rows = 8;
    const cols = 8;
    const possibleMoves = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
    ];

    const [currentSquare, setCurrentSquare] = useState([0, 0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            let nextMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            let newRow = currentSquare[0] + nextMove[0];
            let newCol = currentSquare[1] + nextMove[1];

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                setCurrentSquare([newRow, newCol]);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentSquare, possibleMoves]);

    const renderSquare = (i, j) => {
        const isWhite = (i + j) % 2 === 0;
        const isKnight = currentSquare[0] === i && currentSquare[1] === j;
        return (
            <div key={`${i}-${j}`} role="gridcell" className={`square ${isWhite ? 'white' : 'black'}`}>
                {isKnight && <div className="knight">🐎</div>}
            </div>
        );
    };

    return (
        <div role="grid" className="chess-board">
            {Array.from({ length: rows }).map((_, i) =>
                <div key={i} role="row" className="row">
                    {Array.from({ length: cols }).map((_, j) => renderSquare(i, j))}
                </div>
            )}
        </div>
    );
};

export default Chessboard;
