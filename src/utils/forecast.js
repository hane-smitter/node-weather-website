const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/4b7fc67cfc678daea617663c5174afea/${latitude},${longitude}`;
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('network connection problem');
        } else if(body.error){
            callback('Location not found');
        } else {
            callback(undefined, `${body.daily.data[0].summary}. The current temperature is ${toDegreesCelsius(body.currently.temperature)}°C and there is a ${body.currently.precipProbability}% probability of raining. <b>Time at this place currently is:</b> ${formatTime(body.currently.time, body.timezone)} hrs`);
        }
    })
}
function toDegreesCelsius(fahrenheitTemp) {
    return Math.round(((fahrenheitTemp - 32) * (5/9)) * 100) / 100;
}
function formatTime(time, timeZone) {
    let formattedTime;
    formattedTime = new Date(time * 1000).toLocaleTimeString(undefined, {timeZone, hour12: false});
    return formattedTime;
}

module.exports = forecast;