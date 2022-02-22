import React, { Component } from 'react';
import './Game.css';
import calculateWinner from '../utils/calculateWinner';
import {Board} from '../Board/Board.js';
export const Game=(props)=> {
console.log(props);
  const [state,setState] = React.useState(  {
    history: [{
      squares: Array(9).fill(null)
    }],
    xIsNext: true
  }
);
const handleClick=(i)=> {
  const history = state.history;
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  squares[i] = state.xIsNext ? 'X' : 'O';
  setState({
    history: history.concat([{
      squares: squares
    }]),
    xIsNext: !state.xIsNext,
  });
}
const history = state.history;
const current = history[history.length - 1];
const winner = props.calculateWinner(current.squares);

const moves = history.map((step, move) => {
  const desc = move ?
    'Go to move #' + move :
    'Go to game start';
  return (
    <li>
      <button onClick={() => jumpTo(move)}>{desc}</button>
    </li>
  );
});

let status;
if (winner) {
  status = 'Winner: ' + winner;
} else {
  status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
}

return (
  <div className="game">
    <div className="game-board">
      <Board
        squares={current.squares}
        onClick={(i) => handleClick(i)}
      />
    </div>
    <div className="game-info">
      <div>{status}</div>
      <ol>{moves}</ol>
    </div>
  </div>
);

}





    