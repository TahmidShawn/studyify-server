const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema(
  {
    title: "string",
    description: "string",
    image: "string",
    author: "string",
    duration: "string",
    level: "string",
    class_number: "string",
    price: "number",
    category: "string",
  },

  { collection: "courses" }
);

module.exports = mongoose.model("Courses", coursesSchema);
