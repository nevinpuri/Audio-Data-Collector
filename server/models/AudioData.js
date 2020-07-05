const mongoose = require("mongoose");

const AudioDataSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  audioData: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("AudioDataSchema", AudioDataSchema);
