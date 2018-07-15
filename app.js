const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=2360%20cordoba%20street%20buenos%20aires',
  json: true
}, (error, response, body) => {
  console.log(body);
});
