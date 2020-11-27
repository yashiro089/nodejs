const name = 'Kimbee';
const age = '25';
const location = 'Makati';

const user = {
  name,
  age,
  location
};

console.log(user);

const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
};

const { label: productLabel, stock, rating = 5 } = product;

console.log(productLabel, stock, rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

const transaction = (type, { product }) => {
  console.log(product.label, product.price);
};

transaction('order', product);
