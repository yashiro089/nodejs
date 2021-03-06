const forecast = (latitude, longitude, callback) => {
  const url =
    'https://api.darksky.net/forecast/bd5d5afae096a827d2ac34f18560115e/' +
    latitude +
    ',' +
    longitude +
    '?units=si&lang=lv';

  request({ url: url }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to Weather App');
    }
  });
};

module.exports = {
  forecast: forecast
};
