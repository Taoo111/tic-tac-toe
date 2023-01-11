import './Buttons.css'

export default function NewGame(props) {
    const {newGame} = props;
    return(
        <div>
            <button className="operation-btn" onClick={newGame}>New Game</button>
        </div>
    )
    
};
