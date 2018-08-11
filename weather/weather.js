const request = require('request');

let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/f54ab10f09094cb79d58fc393bdfeb91/${lat},${lng}?units=si`,
    json: true
  }, (err, response, body) => {
    if(err) {
      callback('Unable to connect to Forecast.io server');
    } else if(response.statusCode === 400){
      callback('Unable to fetch weather for requested city');
    } else if(response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        description: body.hourly.summary
      });
    }
  });
}

module.exports.getWeather = getWeather;
