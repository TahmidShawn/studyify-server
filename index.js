const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// express app initialization
const app = express();
app.use(cors());
app.use(express.json());

// database connection with mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.azrqgfm.mongodb.net/${process.env.DB_NAME}`
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// routes
app.get("/", (req, res) => {
  res.send("Hello Stranger!!");
});

app.use("/api/users", require("./routeHandler/userHandler"));

// Default error handler
function errorHandler(err, req, res, next) {
  console.error("Error:", err);
  res.status(500).json({ error: "Something went wrong" });
}

app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
