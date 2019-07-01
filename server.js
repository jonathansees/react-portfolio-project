const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

const yelp = require('yelp-fusion');
const apiKey = 'xvNpInpIU1FBjlSOg9yEVRptavdvJhcpVh6eIWM4maRwPpfctooKafFos_M77m9iBRqvPd3N9Fs7Ts8wbI5Q1zVxdEtWkAQE9BxLQwef6STO66hcOEunNuSNlaIIXHYx';
const client = yelp.client(apiKey);

// Matches with "/api/restaurants"
app.get('/api/restaurants', (req, res) =>{
    const {query} = req
    console.log(query)
    const searchRequest = {
      term: query.searchTerm,
      location: query.searchLocation,
      price: "1",
      open_now: (query.searchOpen ? true : false)
    };

    client.search(searchRequest).then(response => {
      // const id = response.jsonBody.businesses[0].id;
      // console.log(id);
      res.json(response);
    }).catch(e => {
      console.log(e);
    });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));