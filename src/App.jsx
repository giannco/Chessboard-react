import React from 'react';
import Chessboard from './Components/Chessboard.jsx';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="title-container">
                <h1 className="title">Chessboard</h1>  
            </div>
            <Chessboard />
        </div>
    );
}

export default App;
