import React, { useState } from "react"

export default function habitButton({ date }) {
  console.log(date)
  const [completed, setCompleted] = useState(false)
  return (
    <button onClick={() => setCompleted(completed => !completed)}>
      {completed ? "X" : "O"}
    </button>
  )
}
