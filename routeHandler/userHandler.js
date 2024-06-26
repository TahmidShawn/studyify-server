const express = require("express");
const router = express.Router();
const User = require("../schema/userSchema");

// get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send("Error " + err);
  }
});

// get a user
router.get("/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    res.json(user);
  } catch (err) {
    res.send("Error " + err);
  }
});

// post a user
router.post("/", async (req, res) => {
  const user = new User(req.body);
  console.log(user);

  try {
    const newUser = await user.save();
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// update a user
router.patch("/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (req.body.name) {
      user.name = req.body.name;
    }
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// delete a user
router.delete("/:email", async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({
      email: req.params.email,
    });
    res.json(deletedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
