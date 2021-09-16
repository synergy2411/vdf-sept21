const axios = require("axios").default;

const getGeocode = address => {
    return new Promise((resolve, reject ) => {
    const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ`;
    axios.get(URL)
        .then(response => {
            const [latitude, longitude] = response.data.features[0].geometry.coordinates
            const placeName = response.data.features[0].place_name;
            resolve({latitude, longitude, placeName})
        })
        .catch(err => {
            console.log(err);
            reject(err)
        })
    })
}

// getGeocode("pune")

module.exports = {
    getGeocode
}