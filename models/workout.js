const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    //name:.. figure out what values need to be added. date, exercise, name of exercise, duration, weight, reps, sets, distance
    day: {
        type: Date,
        default: Date.now
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
            type:Number,
        },

        reps: {
            type:Number,
        },

        sets: {
            type:Number,
        }
     }]
});


const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;