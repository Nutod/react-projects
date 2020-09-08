import React, { useState } from "react"

export default function habitButton() {
  const [completed, setCompleted] = useState(false)
  return (
    <button onClick={() => setCompleted(completed => !completed)}>
      {completed ? "X" : "O"}
    </button>
  )
}
