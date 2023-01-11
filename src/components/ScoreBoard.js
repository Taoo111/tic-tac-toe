import "./ScoreBoard.css";

export default function ScoreBoard({ scoresStatus, xPlayer: xPlaying }) {
  const { xScore, oScore } = scoresStatus;
  return (
    <div className="scoreboard">
      <span className={`xPlayer ${!xPlaying && "disabled"}`}>X: {xScore}</span>
      <span className={`oPlayer ${xPlaying && "disabled"}`}>O: {oScore}</span>
    </div>
  );
}
