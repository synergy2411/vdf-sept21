const express = require("express");
require("./db");
const todoRouter = require("./router/todo.routes");

const app = express();

app.use(express.json());

app.use("/todos", todoRouter)

app.listen(9090, () => {
    console.log("Express Server started at PORT : 9090")
})