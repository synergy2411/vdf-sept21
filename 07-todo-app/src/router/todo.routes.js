const express = require("express");
const { getAllTodos } = require("../controller/todo.controller")
const todoRouter = express.Router()

// http://localhost:9090/todos
todoRouter.route("")
    .get(getAllTodos)
    .post((req, res) => {})

module.exports = todoRouter;