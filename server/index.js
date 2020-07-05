const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
/*
const fs = require("fs");
const https = require("https");
*/
require("dotenv").config();

app.use(cors());

const dataRoute = require("./routes/audioData");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/audioAPI", (req, res) => {
  res.send("Server is alive");
});

app.use("/audioAPI/audiodata", dataRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("connected");
  }
);

app.listen(5000);

/*
https.createServer({
    key: fs.readFileSync("privkey.pem"),
    cert: fs.readFileSync("fullchain.pem"),
}, app)
.listen(5000, () => {
    console.log("server listening on port 5000");
})


*/
