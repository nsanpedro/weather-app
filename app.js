const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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


geocode.geocodeAddress(argv.address, (errorMsg, results) => {
    if(errorMsg) {
      console.log(errorMsg);
    } else {
       console.log('=====');
       console.log(results.address);
       weather.getWeather(results.latitude, results.longitude, (errorMsg, weatherResults) => {
             if(errorMsg) {
               console.log(`Ocurrio un error, ${errorMsg}`);
             } else {
               console.log('=====');
               console.log(`** Temperatura actual: ${weatherResults.temperature}`);
               console.log(`** Sensacion termica: ${weatherResults.apparentTemperature}`);
               console.log(`** Breve detalle: ${weatherResults.description}`);
               console.log('=====');
             }
       });
    }
});
