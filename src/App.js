import { useState } from "react";

import Board from "./components/Board";
import "./App.css";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const handleSquareClick = (squareID) => {
    const updatedBoard = board.map((value, index) => {
      if (index === squareID) {
        return "X";
      } else return value;

    });
    setBoard(updatedBoard)
  };
  return (
    <div className="App">
      <p>hello worlds</p>
      <Board board={board} onClick={handleSquareClick} />
    </div>
  );
}

export default App;
