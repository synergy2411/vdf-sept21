require("dotenv").config();

const {NODE_ENV} = process.env;

module.exports = NODE_ENV==='production' ? 
    require("./environment.prod") : 
    require("./environment.dev")