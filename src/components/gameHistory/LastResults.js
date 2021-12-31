import React from "react";
import "../../App.css";

const LastResults = ({ scoreTracker, handleResetButtonClick }) => {
  console.log(scoreTracker);

  const invertedScoreTracker = [...scoreTracker].reverse();

  const printedScoreTracker = invertedScoreTracker.slice(0, 5).join(" - ");

  return (
    <div>
      <h3>
        Victory History of the Last 5 Games <br />
        {printedScoreTracker} <br />
        <button className="resetButton" onClick={handleResetButtonClick}>
          Reset Score
        </button>
      </h3>
    </div>
  );
};

export default LastResults;
