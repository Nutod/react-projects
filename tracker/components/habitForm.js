import React from "react"
import { Form, Field } from "@leveluptuts/fresh"

export default function habitForm({ setHabits }) {
  return (
    <Form
      onSubmit={data => {
        setHabits(prevState => [...prevState, data.habit])
      }}
    >
      <Field>Habit</Field>
    </Form>
  )
}
