const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/4b7fc67cfc678daea617663c5174afea/${latitude},${longitude}`;
    request({url, json: true}, (error, response) => {
        if(error){
            callback('network connection problem');
        } else if(response.body.error){
            callback('Location not found');
        } else {
            callback(undefined, `${response.body.daily.data[0].summary}The current temperature is ${toDegreesCelsius(response.body.currently.temperature)}°C and there is a ${response.body.currently.precipProbability}% chance of raining`);
        }
    })
}
function toDegreesCelsius(fahrenheitTemp) {
    return Math.round(((fahrenheitTemp - 32) * (5/9)) * 100) / 100;
}

module.exports = forecast;