const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    label : String,
    status : Boolean
})

const TodoModel = model("Todo", todoSchema)

module.exports = TodoModel;

// Todo -> todos