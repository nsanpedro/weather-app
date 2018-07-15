const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=2360%20cordoba%20street%20buenos%20aires',
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Coordenades: Latitude => ${body.results[0].geometry.location.lat} && Longitude => ${body.results[0].geometry.location.lng}`);

});
