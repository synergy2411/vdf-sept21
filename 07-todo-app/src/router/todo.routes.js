const express = require("express");
const TodoModel = require("../model/todo");

const todoRouter = express.Router()

// http://localhost:9090/todos
todoRouter.route("")
    .get(async (req, res) => {
        try{
        const todos = await TodoModel.find()
        return res.send(todos)
        }catch(err){
            console.log(err)
            return res.send(err)
        }
    })
    .post((req, res) => {})

module.exports = todoRouter;