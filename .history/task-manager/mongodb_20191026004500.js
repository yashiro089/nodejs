const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    console.log('Successfully connected');

    const db = client.db(databaseName);

    // db.collection('users').insertOne(
    //   {
    //     name: 'Kobe',
    //     age: '27'
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection('users').insertMany(
      [
        {
          name: 'Kimbee',
          age: '29'
        },
        {
          name: 'Luka',
          age: 22
        }
      ],
      (error, result) => {
        if (error) {
          console.log('Unable to insert documents');
        }

        console.log(result.opt);
      }
    );
  }
);
