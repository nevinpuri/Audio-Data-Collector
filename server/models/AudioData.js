const mongoose = require("mongoose");

const AudioDataSchema = mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  hour: {
    type: Number,
    required: true,
  },
  audioData: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("AudioDataSchema", AudioDataSchema);
