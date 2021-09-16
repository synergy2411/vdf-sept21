const axios = require("axios").default;

const getForecast = (lat, lng) => {
    return new Promise((resolve, reject) => {
    const URL = `https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${lat},${lng}`;
    axios.get(URL)
        .then(response =>{
            const temperature = response.data.currently.temperature
            const summary = response.data.daily.summary
            resolve({summary, temperature})
        })
        .catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

// getForecast("73.84778", "18.52361")
module.exports = {
    getForecast
}