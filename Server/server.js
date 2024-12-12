const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./pool.js");
// const userRoutes = require("./routes/userRoutes.js"); // user routes, take from user controller

const app = express();
app.use(cors());
app.use(bodyParser.json());

// database conectiivy
pool.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to the database.");
  }
});

//Routes
// app.use("/users", userRoutes);

//starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
