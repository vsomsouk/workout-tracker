const express = require("express");
const mongoose = require("mongoose");
const path = require ("path");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongodb+srv://vsomsouk:<password>@cluster0.lydsp.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true
})
.catch(  err => {console.log(err)});

require("./routes/api-route")(app);
require("./routes/html-route")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
