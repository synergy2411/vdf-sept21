const express = require("express");
const { getAllTodos, createTodo, getSingleTodo, deleteTodo, updateTodo } = require("../controller/todo.controller")
const todoRouter = express.Router()

// http://localhost:9090/todos
todoRouter.route("")
    .get(getAllTodos)
    .post(createTodo) 

todoRouter.route("/:id")
    .get(getSingleTodo)
    .delete(deleteTodo)
    .patch(updateTodo)

module.exports = todoRouter;