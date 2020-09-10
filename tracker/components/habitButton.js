import React, { useState } from "react"

export default function habitButton({ date }) {
  const [completed, setCompleted] = useState(false)
  return (
    <span>
      {date.getMonth() + 1}/{date.getDate()}
      <button onClick={() => setCompleted(completed => !completed)}>
        {completed ? "X" : "O"}
      </button>
      <style jsx>{`
        span {
          display: flex;
          flex-direction: column;
        }

        span + span {
          margin-left: 10px;
        }

        button {
          margin-top: 1rem;
          border: none;
          background: white;
        }
      `}</style>
    </span>
  )
}
