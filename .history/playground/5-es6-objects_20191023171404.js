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

const transaction1 = (type, { product }) => {
  const label = product.label;
  const price = product.price;
  console.log(type, label, price);
};

transaction('order', product);
transaction1('order', product);