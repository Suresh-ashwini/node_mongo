// const express = require("express");
// const bodyParser = require('body-parser');
// const app = express(); // instantiate express
// app.use(bodyParser.json());
// const path = require('path'); 

// const db = require('./connect');


// os method examples
// const os = require('os');
// const totalMemory = os.totalmem();
// console.log('TM',totalMemory);
// const freeMemory = os.freemem();
// console.log('FM',freeMemory);

// Event Class usage
// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.on('message from emitter', function () {
//   console.log('listener called');

// })
// emitter.emit('message from emitter')

// const port = process.env.port || 3000;
// app.listen(port, () => {
//   console.log('server started');

// })

//-----------------------new try---------------
const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 4000;

// << db setup >>
const db = require("./connect");
const dbName = "data";
const collectionName = "movies";

// << db init >>

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});

