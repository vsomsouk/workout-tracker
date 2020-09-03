const Workout = require("../models/workout");

module.exports = function (app) {

  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    Workout.create()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  });


  //view all workouts
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });
 
  
  //continue and update workout
  app.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate({_id: req.params.id},
    {$push:{"exercises": req.body}})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
    }); 
}; 