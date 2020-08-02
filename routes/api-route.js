//where the get, get, post calls go.

//create and post


//update workout
app.post("/update/:id", (req, res) => {
    db.workout.update(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      {
        $set: {
          //title: req.body.title,
          //note: req.body.note,
          //modified: Date.now()
        }
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });

  //view all workouts
  app.get("/all", (req, res) => {
    db.workout.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
