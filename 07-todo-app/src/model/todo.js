const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    label : {
        type : String,
        required : [true, "Label is mandatory field"],
        validate : {
            validator : (value) => {
                return value.length >= 6;
            },
            message : (props) => {
                return `${props.value} should have at least 6 characters`
            }
        }
    },
    status : {
        type : Boolean,
        default : false
    }
})

todoSchema.pre("save", (next) => {
    console.log("Do stuff before saving the record...")
    next()
})
todoSchema.post("save", () => {
    console.log("Do stuff after saving the record")
})

const TodoModel = model("Todo", todoSchema)

module.exports = TodoModel;

// Todo -> todos