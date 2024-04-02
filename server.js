// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const registerHandler = require("./handlers/registerHandler");
const loginHandler = require("./handlers/loginHandler");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
const PORT = 3001; // You can change the port if needed

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  const userData = req.body;
  console.log("Registering a new user with data: ", userData);
  try {
    await registerHandler(userData);
    res.send("successfully added a new user");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint to handle GET requests
app.post("/login", async (req, res) => {
  const userData = req.body;
  try {
    await loginHandler(userData);
    res.send("successfully added a new user");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
