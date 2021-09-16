const http = require("http")
const fs = require("fs");
const readable = fs.createReadStream("./app.js")
const server = http.createServer((request, response) => {
    // read from request
    console.log("Request Method : ", request.method);
    console.log("URL : ", request.url);
    // write on response
    // response.write(JSON.stringify({message : "SUCCESS"}));
    readable.pipe(response);
    // response.end();
})

server.listen(9091, () =>{
    console.log("Server started at PORT : 9091")
})

// Send some file as response