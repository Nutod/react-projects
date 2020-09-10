import React from "react"
import HabitButton from "./habitButton"

const colors = ["#1f1235", "#fbdd74", "#ff6e6c", "#67568c"]

export default function habit({ habit, index }) {
  const dates = getLastFiveDays()

  return (
    <article>
      <h3>{habit}</h3>
      <div>
        {dates.map(date => (
          <HabitButton key={date.getTime()} {...{ date }} />
        ))}
      </div>
      <style jsx>{`
        article {
          padding: 20px;
          border-radius: 10px;
          box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 15px;
        }

        h3 {
          border-bottom: 4px solid ${colors[index]};
        }
      `}</style>
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
