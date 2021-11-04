import React from 'react'
import '../styles/timerCard.css'

function TimerCard({ time, unit }) {
  return (
    <div className="card">
      <p className="dhms">{time}</p>
      <p>{unit}</p>
    </div>
  )
}

export default TimerCard
