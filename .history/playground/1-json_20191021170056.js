const book = {
  title: 'Ego is the enemy',
  author: 'Kimbee Mancuyas'
};

const bookJSON = JSON.stringify(book);

console.log(bookJSON);

const parsedJSONBook = JSON.parse(bookJSON);
console.log(parsedJSONBook.title);
