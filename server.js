//Main starting point of our app
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth', { 
    useCreateIndex: true,
    useNewUrlParser: true
});

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.use(routes);

// Server Setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);