const TodoModel = require("../model/todo");

const getAllTodos = async (req, res) => {
    try{
    const todos = await TodoModel.find()
    return res.send(todos)
    }catch(err){
        console.log(err)
        return res.send(err)
    }
}

module.exports = {
    getAllTodos
}