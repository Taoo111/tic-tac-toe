import './ScoreBoard.css'

export default function ScoreBoard({scoresStatus, xPlaying}) {
    const {xScore, oScore} = scoresStatus
    return(
        <div>
            <p>Scores:</p>
            <span>X: {xScore}</span>
            <br />
            <span>O: {oScore}</span>
        </div>
    )
};
