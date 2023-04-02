//Importing our dependencies
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 2003;

//Telling the view engine we using
app.set('view engine', 'pug');
app.set('views', 'views');

//Rendring the pug file to the client
app.get('/', (req, res, next) => {
  res.status(200).render('home');
});

//Creating the server
const server = app.listen(port, () => {
  console.log(`server started successfully on port ${port}`);
});
