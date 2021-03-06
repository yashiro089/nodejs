const request = require('request');

const url =
  'https://api.darksky.net/forecast/bd5d5afae096a827d2ac34f18560115e/37.8267,-122.4233?units=si';

request({ url: url, json: true }, (error, response, body) => {
  //   const data = JSON.parse(response.body);
  //   console.log(data.currently);
  console.log(response.body.currently);
  const degrees = response.body.currently.temperature;
  const rainPercentage = response.body.currently.precipProbability;
  console.log(
    'It is currently ' +
      degrees +
      ' degrees' +
      ' out.' +
      'There is ' +
      rainPercentage +
      '%' +
      ' chance of rain.'
  );
});
