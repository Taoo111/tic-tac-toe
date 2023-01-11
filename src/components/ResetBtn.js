import "./ResetBtn.css"

export default function ResetBtn(props) {
    const {resetBoard} = props
    return(
        <div>
            <button className="reset-btn" onClick={resetBoard}>Reset</button>
        </div>
    )
};
