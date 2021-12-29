import React from 'react'
import PlayAgain from './PlayAgain'

const Notification = ({ message, classNameStyle, handleButtonClick }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={classNameStyle}>
      {message}
      <PlayAgain handleButtonClick={handleButtonClick}/>
    </div>
  )
}

export default Notification