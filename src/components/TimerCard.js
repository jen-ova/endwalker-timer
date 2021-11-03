import React from 'react'
import '../styles/timerCard.css'

function TimerCards({ time, unit }) {
  return (
    <div className="card">
      <p className="dhms">{time}</p>
      <p>{unit}</p>
    </div>
  )
}

export default TimerCards
