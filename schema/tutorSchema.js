const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema({
  tutorName: {
    type: String,
    required: true,
  },
  tutorEmail: {
    type: String,
    required: true,
  },
  tutorImage: {
    type: String,
    required: true,
  },
  tutorDescription: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tutor", tutorSchema);
