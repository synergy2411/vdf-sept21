const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { ensureToken, verifyToken } = require("./middleware/auth.middleware")
require("dotenv").config();
const { PORT } = require("../environment");

const { SECRET_KEY } = process.env;

// const PORT = process.env.PORT || 9090;

app.use(express.json());

app.get("/api");
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    // Connect to your DB & verify the user
    const token = jwt.sign({ id: 123 }, SECRET_KEY);
    return res.send({ token });
  } else {
    return res.send({ message: "Credentials needed!" });
  }
});

app.get(
  "/api/protected",
  ensureToken,
  verifyToken,
  (req, res) => {
      return res.send({id : req.userId})
  }
);

app.listen(PORT, () => {
  console.log("Express server running on PORT : ", PORT);
});
