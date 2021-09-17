const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { ensureToken, verifyToken } = require("./middleware/auth.middleware")

const PORT = process.env.PORT || 9090;

const privateKey = "MY_SUPER_SECRET_KET";

app.use(express.json());

app.get("/api");
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    // Connect to your DB & verify the user
    const token = jwt.sign({ id: 123 }, privateKey);
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
