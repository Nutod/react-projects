import React from "react"
import HabitButton from "./habitButton"

export default function habit() {
  return (
    <article>
      <h3>Habit Title</h3>
      <div>
        <HabitButton />
        <HabitButton />
        <HabitButton />
        <HabitButton />
        <HabitButton />
      </div>
    </article>
  )
}
