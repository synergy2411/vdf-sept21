const express = require("express");
const app = express();
const { getForecast } = require("./utils/forecast")
const { getGeocode } = require("./utils/geocode")

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/show-weather", (req, res) => {
    const {address} = req.query;
    if(address){
        getGeocode(address)
            .then(response => {
                const {latitude, longitude, placeName} = response;
                getForecast(latitude, longitude)
                    .then(result =>{ 
                        const {temperature, summary} = result;
                        return res.send({placeName, summary, temperature});
                    })
                    .catch(err => {
                        return res.send({err})
                    })
            })
            .catch(err => {
                return res.send({err})
            })
    }else{
        return res.send({message : "Need address to forecast weather."})
    }
})

app.listen(9090, () => {
    console.log("Express Server running on PORT : 9090")
})