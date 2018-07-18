const request = require('request');
const yargs = require('yargs');
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

  console.log(argv);
  console.log(argv.address);

let encodeAddress = encodeURIComponent(argv.address);
console.log(encodeAddress);

request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Coordenades: Latitude => ${body.results[0].geometry.location.lat} && Longitude => ${body.results[0].geometry.location.lng}`);

});
