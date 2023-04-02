const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 2003;

//Telling the view engine we using
app.set('view engine', 'pug');

const server = app.listen(port, () => {
  console.log(`server started successfully on port ${port}`);
});
