const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// .handlebars
app.set("view engine", "hbs");

const posts =  [
{
    author : "John Doe",
    image : "https://picsum.photos/536/354",
    body : "This is awesome template",
    comments : [
        "I like it.",
        "Not so bad",
        "Can be improved"
    ]
},
{
    author : "James Doe",
    body : "This is awesome template",
    image : "https://picsum.photos/536/354",
    comments : [
        "I like it.",
        "Not so bad",
        "Can be improved"
    ]
},{
    author : "Jenny Doe",
    body : "This is awesome template",
    image : "https://picsum.photos/536/354",
    comments : [
        "I like it.",
        "Not so bad",
        "Can be improved"
    ]
}

]

app.engine("hbs", exphbs({
    extname :  ".hbs",
    layoutsDir : __dirname + "/views/layout",
    partialsDir: __dirname + "/views/partials"
}))

app.get("/home", (req, res) => {
    res.render("index",{
        layout : "main",
        posts,
        helpers : {
            showNameInUpperCase(authorName){
                return authorName.toUpperCase()
            }
        }
    })
})

app.get("/about", (req, res) => {
    res.render("about",{
        layout : "main"
    })
})

app.listen(9090, () => console.log("Server started at PORT : 9090"))