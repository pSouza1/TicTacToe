import React from 'react'
import PlayAgain from './playAgainButton/PlayAgain'

const Notification = ({ message, classNameStyle, handleNotificationButtonClick }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={classNameStyle}>
      {message}
      <PlayAgain handleNotificationButtonClick={handleNotificationButtonClick}/>
    </div>
  )
}

export default Notification