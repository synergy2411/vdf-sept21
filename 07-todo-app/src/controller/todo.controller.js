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

const getSingleTodo = async (req, res) => {
    const { id } = req.params;
    try{
        const todo = await TodoModel.findById(id)
        return res.send({...todo._doc})
    }catch(err){
        console.log(err);
        return res.send(err)
    }
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try{
        const deletedTodo = await TodoModel.findByIdAndDelete(id);
        return res.send({...deletedTodo._doc})
    }catch(err){
        console.log(err)
        return res.send(err)
    }
}

const updateTodo = async (req, res) => {
    const { id } = req.params;
    if(req.body){
        const updatedTodo = await TodoModel.findByIdAndUpdate(id, req.body)
        return res.send({...updatedTodo._doc})
    }else{
        return res.send({message : "Body not found"})
    }
}

module.exports = {
  getAllTodos,
  createTodo,
  getSingleTodo,
  deleteTodo,
  updateTodo
};
