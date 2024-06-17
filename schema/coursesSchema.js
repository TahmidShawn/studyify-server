const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
      required: true,
    },
    detailed_description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    author_img: {
      type: String,
      required: true,
    },
    author_name: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    author_email: {
      type: String,
      required: true,
    },
  },

  { collection: "courses" }
);

module.exports = mongoose.model("Courses", coursesSchema);
