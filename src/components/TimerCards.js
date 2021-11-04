import React from 'react'
import TimerCard from './TimerCard'
import '../styles/timerCards.css'

function TimerCards({ timeLeft }) {
  const timeArray = Object.entries(timeLeft)

  return (
    <div className="timer-cards">
      {timeArray.map((time, index) => (
        <TimerCard time={time[1]} unit={time[0]} key={`timer-card-${index}`} />
      ))}
    </div>
  )
}

export default TimerCards
