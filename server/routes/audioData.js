const express = require("express");
const router = express.Router();
const AudioData = require("../models/AudioData");
const { json } = require("express");

router.get("/", async (req, res) => {
  try {
    let today = new Date();
    const allData = await AudioData.find({ date: today.getDate() });
    res.json(allData);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const audioData = new AudioData({
    year: req.body.year,
    month: req.body.month,
    date: req.body.date,
    hour: req.body.hour,
    audioData: req.body.audioData,
  });
  console.log(audioData);
  try {
    const savedAudioData = await audioData.save();
    console.log(audioData);
    res.sendStatus(201);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
