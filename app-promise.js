const yargs = require('yargs');
const axios = require('axios');


const argv = yargs
    .options({
        a: {
          demand: true,
          alias: 'address',
          describe: 'Address to fetch weather',
          string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl)
    .then((response) => {
      if(response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
      }
      let lat = response.data.results[0].geometry.location.lat;
      let lng = response.data.results[0].geometry.location.lng;
      let weatherUrl = `https://api.darksky.net/forecast/f54ab10f09094cb79d58fc393bdfeb91/${lat},${lng}?units=si`;
      console.log('*****');
      console.log(response.data.results[0].formatted_address);
      return axios.get(weatherUrl);
    }).then((response) => {
        let temperature = response.data.currently.temperature;
        let apparentTemperature = response.data.currently.apparentTemperature;
        let description = response.data.hourly.summary;
        console.log('*****');
        console.log(`The temperature is ${temperature}*C, it feels like ${apparentTemperature}*C.`);
        console.log(`Rest of the day: ${description}`);
        console.log('*****');
    }).catch((err) => {
      if(e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers');
      } else {
        console.log(e.message);
      }
    });
