const client = require("mongodb").MongoClient;

// const URL = "mongodb://localhost:27017/vdf-db"
const URL = "mongodb+srv://vdf:YaSxUSZKBgiZSttl@cluster0.e9xsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

client.connect(URL)
    .then(conn => {
        console.log("Mongo connected...");
        // const _db = conn.db("vdf-db")
        // READ
        // _db.collection("users").find().toArray()
        //     .then(docs => {
        //         console.log(docs);
        //     })
        //     .catch(err => console.log(err))

        // CREATE
        // _db.collection("users").insertOne({username :"bam", password : "bam123"})
        //     .then(response => {
        //         console.log(response)
        //     }).catch(err => console.log(err))

        // DELETE
        // _db.collection("users").deleteOne({username : "bam"})
        //     .then(response => console.log(response))
        //     .catch(err => console.log(err))

        // UPDATE
        // _db.collection("users").updateOne(
        //     {username : "bam"}, 
        //     {$set : {password : "test123"}})
        //     .then(response => console.log(response))
        //     .catch(err =>console.log(err))


    }).catch(err => {
        console.log(err)
    })