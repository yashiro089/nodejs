console.log('client side js file is loaded');

// fetch('http://puzzle.mead.io/puzzle').then(response => {
//   response.json().then(data => {
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');

messageOne.textContent = 'From JS';

weatherForm.addEventListener('submit', e => {
  e.preventDefault();

  const location = search.value;

  fetch('http://localhost:3000/weather?address=' + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        console.log(data);
        // console.log(data.forecast);
        // console.log(data.address);
        messageOne.textContent = data.forecast;
      }
    });
  });
});
