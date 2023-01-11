import "./Buttons.css"

export default function ResetBtn(props) {
    const {resetBoard} = props
    return(
        <div>
            <button className="operation-btn" onClick={resetBoard}>Reset</button>
        </div>
    )
};
