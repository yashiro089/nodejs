const request = require('supertest');
const app = require('../src/app');

const User = require('../src/models/user');

const userOne = {
  name: 'Christopher Mancuyas',
  email: 'christopher.mancuyas@cebuoversea.com',
  password: 'admin123!'
};

beforeEach(async () => {
  console.log('beforeEach');
  await User.deleteMany();
  await new User(userOne);
});

afterEach(() => {
  console.log('afterEach');
});

test('Should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: userOne.name,
      email: userOne.email,
      password: userOne.password
    })
    .expect(201);
});

// test('Should login existing user', async () => {
//   await request(app)
//     .post('/users/login')
//     .send({
//       email: userOne.email,
//       password: userOne.password
//     })
//     .expect(200);
// });
