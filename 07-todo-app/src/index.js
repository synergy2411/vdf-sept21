const express = require("express");
require("./db");
const todoRouter = require("./router/todo.routes");

const app = express();

const PORT = process.env.PORT || 9090

app.use(express.json());

app.use("/todos", todoRouter)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(PORT, () => {
    console.log("Express Server started at PORT : " + PORT)
})