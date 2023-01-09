import Board from "./components/Board"
import "./App.css";

function App() {
  const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
  return (
    <div className="App">
      <p>hello worlds</p>
      <Board board={board} onClick={null}/>

    </div>
  );
}

export default App;
