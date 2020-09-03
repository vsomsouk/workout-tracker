const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Exercise Type is Required"
        },

        name: {
            type: String,
            trim: true,
            required: "Name of Exercise is Required"
        },

        duration: {
            type: Number,
        },

        weight: {
            type: Number,
        },

        reps: {
            type: Number,
        },

        sets: {
            type: Number,
        }
     }]
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;