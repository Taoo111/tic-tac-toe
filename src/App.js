import { useState } from "react";

import Board from "./components/Board";
import "./App.css";

function App() {
  const WIN_STATUS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [xPlayer, setXPlayer] = useState(true);

  const handleSquareClick = (squareID) => {
    const updatedBoard = board.map((value, index) => {
      if (index === squareID) {
        return xPlayer === true ? "X" : "O";
      } else return value;
    });
    checkWinner(updatedBoard);
    setBoard(updatedBoard);
    setXPlayer(!xPlayer);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_STATUS.length; i++) {
      const [a, b, c] = WIN_STATUS[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(board[a]);
        return board[a];
      }
    }
  };
  return (
    <div className="App">
      <p>hello worlds</p>
      <Board board={board} onClick={handleSquareClick} />
    </div>
  );
}

export default App;
