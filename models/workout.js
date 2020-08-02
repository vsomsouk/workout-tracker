const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
    //name:.. figure out what values need to be added. date, exercise, name of exercise, duration, weight, reps, sets, distance
})

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;