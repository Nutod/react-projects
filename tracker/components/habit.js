import React from "react"
import HabitButton from "./habitButton"

export default function habit({ habit }) {
  const dates = getLastFiveDays()

  console.log(dates)
  return (
    <article>
      <h3>{habit}</h3>
      <div>
        {dates.map(date => (
          <HabitButton key={date.getMilliseconds()} {...{ date }} />
        ))}
      </div>
    </article>
  )
}

// function getLastFiveDays() {
// const tempDate = new Date()
//   return new Array(5)
//     .fill(0)
//     .map((_, index) => tempDate.setDate(tempDate.getDate() - index))
// }

function getLastFiveDays() {
  return new Array(5).fill(0).map((_, index) => {
    const tempDate = new Date()

    tempDate.setDate(tempDate.getDate() - index)

    return tempDate
  })
}
