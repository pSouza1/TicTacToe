import React from 'react'
import "../App.css";

const PlayAgain = ({handleButtonClick}) => {
    return(
    <div>
        <button className="button" onClick={handleButtonClick}>Play Again</button>
    </div>
    )
}

export default PlayAgain