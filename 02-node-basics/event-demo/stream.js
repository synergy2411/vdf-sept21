// const EventEmitter = require("events").EventEmitter;

// const Stream = require("stream").Stream;

// const readable = new Stream.Readable()
// const writable = new Stream.Writable()

// console.log(readable instanceof EventEmitter)
// console.log(writable instanceof EventEmitter)


const fs = require("fs");
const readStream = fs.createReadStream("./app.js")
const writeStream = fs.createWriteStream("./text.txt")
readStream.pipe(writeStream)

// readStream.pipe(process.stdout);

readStream.on("data", (chunk) => {
    console.log(chunk.toString());
    writeStream.write(chunk)
    readStream.on("end", () => {
        console.log("Finish reading");
    })
})

// accessing the FS, and sending file to client
// Download Server
// readStream.pipe(response)
// Upload Server
// request.pipe(writeStream);

// pipe() |