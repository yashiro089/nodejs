const request = require('supertest');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = require('../src/app');

const userOneId = mongoose.Types.ObjectId();
const User = require('../src/models/user');

const userOne = {
  _id: userOneId,
  name: 'Christopher Mancuyas',
  email: 'christopher.mancuyas@cebuoversea.com',
  password: 'admin123!'
};

beforeEach(async () => {
  // console.log('beforeEach');
  await User.deleteMany();
  await new User(userOne).save();
});

afterEach(() => {
  console.log('afterEach');
});

test('Should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Kobe Mancuyas',
      email: 'kobe.mancuyas@cebuoversea.com',
      password: 'admin123!'
    })
    .expect(201);
});

test('Should login existing user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200);
});

test('should not login existing user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: userOne.email,
      password: 'thisisnotpassword'
    })
    .expect(400);
});
