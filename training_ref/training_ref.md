JavaScript 
- Functions
- Objects
- ES6 features

# Package.json file - meta info about project
- npm init

- npm install -> install all dependencies present in package.json file

- npm install chalk@4.0.0
- npm outdated
- npm update
- npm outdated
- npm uninstall chalk
- npm ls [--depth 0]
- npm config set / get
- npm adduser
- npm publish
- npm search

# To install global packages
- npm install nodemon -g

# To install development dependency
- npm install mocha --save-dev | -D

# Semantic Version System

X.Y.Z

1.0.0
- after bug fixed
1.0.1
1.0.2
- after adding new functionality without changing existing code
1.1.0
1.2.0
- after adding new functionality affecting the existing code
2.0.0


X-> Major
Y-> Minor
Z-> Patch/Bug fixes 

16.3.0
16.3.9
16.4.9

16.1.0 -> npm outdated -> 

wanted -> 16.4.9
latest



# Modules
- Native 
- File
- External

- Notes App

- NPM Commands


- Events
- Streams
- Express
- Mongo


- npm install nodemon -g

- npm install express

# Express API
- Route Paramter : request.params
- Query Paramter : request.query
- Request Body : request.body (POST + express.json())

# MAPBOX API
https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ

# DARKSKY API
https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/37.8267,-122.4233


# MongoDB
- Set path in environment variables
- mongod --dbpath="c:/data/db"      (start the mongo server)
- mongo     (open mongo shell)
- use vdf-db
- db
- db.users.insertOne({username : "foobar", passowrd: "foo123})
- db.users.find()

# Download Compass / Robo 3T (GUI for Mongo)


- npm install mongodb


# Mongo Atlas Cloud

- Create Cluster (Free Available)
- Create Database User (vdf, YaSxUSZKBgiZSttl)
- Network Access

# Mongo SRV
mongodb+srv://vdf:YaSxUSZKBgiZSttl@cluster0.e9xsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

# Mongoose - ORM for Mongodb
- npm install mongoose 

# Todo App
- GET : /todos - all todo items
- POST : /todos - create single todo item
- GET : /todos/{id} - single todo item
- DELETE : /todos/{id} - delete single item
- PATCH : /todos/{id} - update the single item
    : req.body - updated data
    : {id} - route parameter
    : findByIdAndUpdate(id, req.body)



- nodemon src/index.js
- npm run dev|start


# Mongoose 
- Schema based model
- Validation : built-in & Custom
- Hooks : pre & post


# Heroku Cloud - Deployment
- Sign up and login on Heroku
- Download heroku cli from heroku devcenter
- Restart IDE
- Github Account login
- Create Git repo and commit project code

- heroku -v
- heroku login
- Optional - Generate SSH key from Powershell - > ssh-keygen
- heroku keys:add
- heroku create <Application_Name>
// commit all code to git
// push all code to git
- git remote		// checks the git servers
- git push heroku main

# Deployed URI : https://sk-vdf-todo-app.herokuapp.com/todos

# json web token
- npm install jsonwebtoken
- npm install dotenv

# View / Template Engines 
- Reusability
- Dynamic Contents