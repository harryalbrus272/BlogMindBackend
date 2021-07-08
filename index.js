const express = require('express');
let cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
require('dotenv').config();
const db = require('./config/mongoose');
//Route just to test if the server is working for the initial stages of the project
app.get('/', (req, res) => {
  res.send('Project server is running');
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Routing and related middlewares
app.use('/', require('./routes'));
//Connecting to the port
app.listen(port, (err)=> {
    err?.console.log('Error in running the server');
    console.log(`Server running on port : ${port}`);
})
