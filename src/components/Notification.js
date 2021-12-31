import React from "react";
import LastResults from "./gameHistory/LastResults";
import "../App.css";

const Notification = ({ message, classNameStyle, handleNotificationButtonClick, scoreTracker, handleResetButtonClick }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className={classNameStyle}>
      <h2>{message}</h2>

      <div align="center">
        <button className="button" onClick={handleNotificationButtonClick}>
          Play Again
        </button>
      </div>

      <LastResults
        scoreTracker={scoreTracker}
        handleResetButtonClick={handleResetButtonClick}
      />
    </div>
  );
};

export default Notification;
