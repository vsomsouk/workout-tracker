const express = require("express");
const mongoose = require("mongoose");
const path = require ("path");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require("./routes/api-route"));
app.use(require("./routes/html-route"));

const db = require("./models/html.js");

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
