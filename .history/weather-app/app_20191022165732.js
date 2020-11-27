const request = require('request');

const url =
  'https://api.darksky.net/forecast/bd5d5afae096a827d2ac34f18560115e/37.8267,-122.4233';

request({ url: url, json: true }, (error, response, body) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
