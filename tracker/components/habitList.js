import React from "react"
import Habit from "./habit"

export default function habitList({ habits, setHabits }) {
  return (
    <section>
      <h2>My Habits</h2>
      {habits.map((habit, index) => (
        <Habit key={index} habit={habit} {...{ index }} />
      ))}
    </section>
  )
}
