const express = require("express");
const app = express();

app.use(express.json()); // parse the json and attach it with req.body

const todoCollection = [
  { id: 1, label: "to buy new jeans", status: true },
  { id: 2, label: "to buy the pulse", status: true },
  { id: 3, label: "to renew car insurance", status: true },
  { id: 4, label: "to pot the plants", status: true },
];

app.post("/api/todos", (req, res) => {
  if (req.body) {
    const item = { ...req.body, id: todoCollection.length + 1 };
    todoCollection.push(item);
    return res.send({ ...item });
  } else {
    return res.send({ message: "Req body does not exist" });
  }
});

// http://localhost:9090/api/todos?limit=2
// Query Parameter
app.get("/api/todos", (req, res) => {
  const { limit } = req.query;
  if (limit) {
    const todoList = todoCollection.filter((todo, index) => {
      return index < limit;
    });
    return res.send({ items: todoList });
  }else{
      return res.send({todos : todoCollection})
  }
});

// http://localhost:9090/api/todo/2
// Route Parameter
app.get("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const foundItem = todoCollection.find((todo) => todo.id === Number(id));
  if (foundItem) {
    return res.send({ item: foundItem });
  } else {
    return res.send({ message: "Can't find item for ID - ", id });
  }
});

app.get("/api/todos", (req, res) => {
  res.send({ todos: todoCollection });
});

// http://localhost:9090/api - GET
app.get("/api", (req, res, next) => {
  console.log("Method : ", req.method);
  console.log("URL : ", req.url);
  res.send({ message: "GET API SUCCESS" });
});

// http://localhost:9090/api - POST
app.post("/api", (req, res) => {
  console.log("Method : ", req.method);
  console.log("URL : ", req.url);
  res.send({ message: "POST API SUCCESS" });
});

app.listen(9090, () => {
  console.log("Express server running on PORT : 9090");
});
