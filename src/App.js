import { useState } from "react";

import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetBtn from "./components/ResetBtn";

import "./App.css";

const squareArray = ["", "", "", "", "", "", "", "", ""]

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

  const [board, setBoard] = useState(squareArray);
  const [xPlayer, setXPlayer] = useState(true);
  const [scoreStatus, setScoreStatus] = useState({
    xScore: 0,
    oScore: 0,
  });
  const [reset, setReset] = useState(false);

  const handleSquareClick = (squareID) => {
    const updatedBoard = board.map((value, index) => {
      if (index === squareID) {
        return xPlayer === true ? "X" : "O";
      } else return value;
    });

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "X") {
        let { xScore } = scoreStatus;
        xScore += 1;
        setScoreStatus({ ...scoreStatus, xScore });
      } else if (winner === "O") {
        let { oScore } = scoreStatus;
        oScore += 1;
        setScoreStatus({ ...scoreStatus, oScore });
      }
    }

    setBoard(updatedBoard);
    setXPlayer(!xPlayer);
  };

  const gameOver = () => {
    setReset(false);
    setBoard(squareArray);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_STATUS.length; i++) {
      const [a, b, c] = WIN_STATUS[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setReset(true);
        return board[a];
      }
    }
  };

  const resetBoard = () => {
    setReset(false)
    setBoard(squareArray)
  }
  return (
    <div className="App">
      <ScoreBoard scoresStatus={scoreStatus} xPlayer={xPlayer} />
      <Board board={board} onClick={reset ? gameOver : handleSquareClick} />
      <ResetBtn resetBoard={resetBoard} />
    </div>
  );
}

export default App;

