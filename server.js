const express = require('express'); 
const mongoose = require('mongoose');

const server = express();

// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
