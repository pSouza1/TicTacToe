import React from 'react'
import LastResults from './gameHistory/LastResults'
import PlayAgain from './playAgainButton/PlayAgain'
import "../App.css";

const Notification = ({ message, classNameStyle, handleNotificationButtonClick, scoreTracker}) => {
  if (message === null) {
    return null
  }

  return (
    <div className={classNameStyle}>
      <h2>{message}</h2>
      <PlayAgain handleNotificationButtonClick={handleNotificationButtonClick}/>
      <LastResults scoreTracker={scoreTracker} />
    </div>
  )
}

export default Notification