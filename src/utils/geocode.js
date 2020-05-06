const request = require('request');
const chalk = require('chalk');

const geocode = (place, callback) => {
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic21pdHRlciIsImEiOiJjazloaXFycXMwZDJrM2htd2h5ZzBhc3pnIn0.DyIwUnDo_khsyr6FW08F1g&limit=1`;

    request({url: geocodeURL, json: true}, (error, response) => {
        if(response && response.body.features.length !== 0) {
            var dataObj = {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            }
        }
            let coords = response ? dataObj : undefined;
            if (error) {
                callback('unable to connect!!', coords);
            } else if(response.body.features.length == 0) {
                callback('Results not found for this location!', coords)
            } else {
                callback(error, coords);
            }
    })
}


module.exports = {
                    geocode
                };