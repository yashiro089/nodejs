require('./src/db/mongoose');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const userRouter = require('./src/routers/user');
const taskRouter = require('./src/routers/task');

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET request are disabled');
//   } else {
//     next();
//   }
// });

app.use((req, res, next) => {
  if (process.env) {
    res.set('Site is under maintenance mode');
  } else {
    next;
  }
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + ' ...');
});

// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {
//     expiresIn: '7 days'
//   });
//   console.log(token);

//   const data = jwt.verify(token, 'thisismynewcourse');
//   console.log(data);
// };

// myFunction();
