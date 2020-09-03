const express = require("express");
const mongoose = require("mongoose");
const path = require ("path");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true});

app.use(require("./routes/api-route"));
app.use(require("./routes/html-route"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
