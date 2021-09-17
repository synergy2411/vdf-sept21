const { connect } = require("mongoose");

// const LOCAL_URI = "mongodb://localhost:27017";
const URI = "mongodb+srv://vdf:YaSxUSZKBgiZSttl@cluster0.e9xsq.mongodb.net/vdf-db?retryWrites=true&w=majority";

connect(URI)
    .then(conn => {
        console.log("Mongoose connected!")
    })
    .catch(err=>console.log(err))