const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname);
console.log(path.join(__dirname, '../..'));
// route, function
app.get('', (req, res) => {
  res.send('Hello express');
});

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Kobe',
      age: 27
    },
    {
      name: 'Kimbee',
      age: 27
    }
  ]);
});

app.get('/about', (req, res) => {
  res.send('<h1>about page</h1>');
});

app.get('/weather', (req, res) => {
  res.send([
    {
      url:
        'https://api.darksky.net/forecast/bd5d5afae096a827d2ac34f18560115e/12,114?units=si&lang=en',
      location: 'makati'
    }
  ]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + '...');
});
