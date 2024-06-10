const express = require("express");
const router = express.Router();
const Courses = require("../schema/coursesSchema");

router.get("/", async (req, res) => {
    try {
      const courses = await Courses.find();
      res.json(courses);
    } catch (err) {
      res.send("Error " + err);
    }
  });
module.exports = router;