// DB Collection
import mongoose from "mongoose"

export const HabitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

export default mongoose.model.Habit || mongoose.model("Habit", HabitSchema)
