// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
// const argv = yargs
//     .options({
//         a: {
//           demand: true,
//           alias: 'address',
//           describe: 'Address to fetch weather',
//           string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;
//
// geocode.geocodeAddress(argv.address, (errorMsg, results) => {
//     if(errorMsg) {
//       console.log(errorMsg);
//     } else {
//       console.log(JSON.stringify(results, undefined, 2));
//     }
// });
//
// // f54ab10f09094cb79d58fc393bdfeb91
//
//


const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/f54ab10f09094cb79d58fc393bdfeb91/-34.6036844,-58.3815591',
  json: true
}, (err, response, body) => {
  if(!err && response.statusCode === 200) {
    console.log(`The temperature in the requested city is ${body.currently.temperature} !`);
  } else {
    console.log('Unable to Fetch data from API');
  }

});
