import Square from "./Square"
import "./Board.css"

export default function Board({board, onClick}) {
    return(
        <div className="board">
            {
                board.map((value, index) =>{
                    return <Square value={value} onClick={()=>{
                        onClick(index)
                    }} key={index}/>
                })
            }
            </div>
    )
};
