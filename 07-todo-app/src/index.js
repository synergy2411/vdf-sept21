const express = require("express");

const app = express();

app.use(express.json());

app.get("/todos", (req, res) => {})

app.listen(9090, () => {
    console.log("Express Server started at PORT : 9090")
})