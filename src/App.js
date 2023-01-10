import { useState } from "react";

import Board from "./components/Board";
import "./App.css";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [xPlayer, setXPlayer] = useState(true);
  const handleSquareClick = (squareID) => {
    const updatedBoard = board.map((value, index) => {
      if (index === squareID) {
        return xPlayer === true ? "X" : "O";
      } else return value;
    });
    setBoard(updatedBoard);
    setXPlayer(!xPlayer)
  };
  return (
    <div className="App">
      <p>hello worlds</p>
      <Board board={board} onClick={handleSquareClick} />
    </div>
  );
}

export default App;
