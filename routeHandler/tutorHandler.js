const express = require("express");
const router = express.Router();
const Tutor = require("../schema/tutorSchema");

router.get("/", async (req, res) => {
  try {
    const tutors = await Tutor.find();
    res.json(tutors);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const tutor = new Tutor(req.body);
  console.log('tutor',tutor);

  try {
    const newTutor = await tutor.save();
    res.json(newTutor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
