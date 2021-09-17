const express = require("express");
const { getAllTodos, createTodo } = require("../controller/todo.controller")
const todoRouter = express.Router()

// http://localhost:9090/todos
todoRouter.route("")
    .get(getAllTodos)
    .post(createTodo) 

module.exports = todoRouter;