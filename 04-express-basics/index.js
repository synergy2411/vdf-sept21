const express = require("express")
const app = express();

// http://localhost:9090/api
app.get("/api", (req, res, next) => {
    console.log("Method : ", req.method);
    console.log("URL : ", req.url);
    res.send({message : "GET API SUCCESS"})
})

// Create POST API and test it by Postman

app.listen(9090, () => {
   console.log("Express server running on PORT : 9090");
}) 