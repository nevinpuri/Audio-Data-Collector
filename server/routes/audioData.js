const express = require("express");
const router = express.Router();
const AudioData = require("../models/AudioData");
const { json } = require("express");

router.get("/", async (req, res) => {
  try {
    const allData = await AudioData.find({});
    res.json(allData);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  let today = new Date();
  const audioData = new AudioData({
    date: req.body.date,
    time: req.body.time,
    audioData: req.body.audioData,
  });
  console.log(audioData);
  try {
    const savedAudioData = await audioData.save();
    console.log(audioData);
    res.json(savedAudioData);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
