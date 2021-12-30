import React from "react";
import "../../App.css";

const PlayAgain = ({ handleNotificationButtonClick }) => {
  return (
    <div align="center">
      <button className="button" onClick={handleNotificationButtonClick}>
        Play Again
      </button>
    </div>
  );
};

export default PlayAgain;
