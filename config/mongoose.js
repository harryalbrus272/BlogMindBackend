const mongoose = require('mongoose');
const env = require('./environment');
const user = env.development.mongousername;
const password = env.development.mongopassword;
mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0.jsxod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connnected to the MongoDB');
}).on('error', (err) => {
  console.log('Error: ', err);
});
