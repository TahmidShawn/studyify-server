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
// Get a single course by _id
router.get("/:id", async (req, res) => {
  try {
    const courseId = req.params.id;
    const courseById = await Courses.findById(courseId);
    res.json(courseById);
  } catch (err) {
    res.status(500).send("Error " + err);
  }
});
module.exports = router;
