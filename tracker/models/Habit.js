const mongoose = require("mongoose")

const HabitSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  completed: {
    required: true,
    type: Boolean,
  },
})

module.exports = mongoose.model("Habit", HabitSchema)
