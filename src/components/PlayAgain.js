import './Buttons.css'

export default function PlayAgain(props) {
    const {playAgain} = props;
    return(
        <div>
            <button className="operation-btn" onClick={playAgain}>New Game</button>
        </div>
    )
    
};
