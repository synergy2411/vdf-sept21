const TodoModel = require("../model/todo");

const getAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    return res.send(todos);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

const createTodo = async (req, res) => {
  if (req.body) {
    try {
      const todo = new TodoModel({ ...req.body });
      const newTodo = await todo.save();
      return res.send({ ...newTodo._doc });
    } catch (err) {
      console.log(err);
      return res.send(err);
    }
  } else {
    return res.send({ message: "Body not found" });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
};
