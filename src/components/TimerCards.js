import React from "react";
import "../styles/timerCards.css";

function TimerCards({ timeLeft }) {
  return (
    <div className="timer-cards">
      <div className="card">
        <p className="dhms">{timeLeft.days}</p>
        <p>days</p>
      </div>
      <div className="card">
        <p className="dhms">{timeLeft.hours}</p>
        <p>hours</p>
      </div>
      <div className="card">
        <p className="dhms">{timeLeft.minutes}</p>
        <p>minutes</p>
      </div>
      <div className="card">
        <p className="dhms">{timeLeft.seconds}</p>
        <p>seconds</p>
      </div>
    </div>
  );
}

export default TimerCards;
