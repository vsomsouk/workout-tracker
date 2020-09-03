const db = require("../models/Workout");

module.exports = function (app) {

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

   app.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  }); 

    //continue and update workout
    app.put("/api/workouts/:id", (req, res) => {
      db.Workout.findByIdAndUpdate(req.params.id,
      {$push:{exercises: req.body}})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
      }); 

  //view all workouts
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });
 
};  
