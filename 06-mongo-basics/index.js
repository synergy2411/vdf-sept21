const client = require("mongodb").MongoClient;

const URL = "mongodb://localhost:27017/vdf-db"
client.connect(URL)
    .then(conn => {
        console.log("Mongo connected...");
        const _db = conn.db("vdf-db")
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

        // UPDATE

        
    }).catch(err => {
        console.log(err)
    })