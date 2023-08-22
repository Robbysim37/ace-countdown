import CountdownTimer from './CountdownTimer';
import {useState} from "react"

import './App.css';

export default function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const [dateTimeAfterThreeDays,
    setDateTImeAfterThreeDays]= useState(NOW_IN_MS + THREE_DAYS_IN_MS)

  const addTime = () => {
    const time = new Date().getTime()
    setDateTImeAfterThreeDays(time - (1000 * 60 * 60 * 24))
  }

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      <button on onClick={addTime}>test</button>
    </div>
  );
}
