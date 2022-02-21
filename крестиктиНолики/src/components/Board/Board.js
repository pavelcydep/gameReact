import React, { Component } from 'react';
import './Board.css';
import {Square} from '../Square/Square';
export const Board=(props)=>  {
  const [state,setState] = React.useState({
    squares: Array(9).fill(null),
    xIsNext: true
  });
  
  const handleClick=(i)=> {
      const squares = state.squares.slice();
      squares[i] = state.xIsNext ? 'X' : '0';
      setState({squares: squares,xIsNext: !state.xIsNext,});
    }
      const status = 'Next player: X';
      const renderSquare=(i)=> {
        return <Square 
        value={state.squares[i]}
        onClick={()=>handleClick(i)}
        />;
      }
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
    
  }