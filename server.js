const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

//LOGIN 
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireSignin = passport.authenticate('local', { session: false });

//YELP
const yelp = require('yelp-fusion');
const apiKey = 'xvNpInpIU1FBjlSOg9yEVRptavdvJhcpVh6eIWM4maRwPpfctooKafFos_M77m9iBRqvPd3N9Fs7Ts8wbI5Q1zVxdEtWkAQE9BxLQwef6STO66hcOEunNuSNlaIIXHYx';
const client = yelp.client(apiKey);


const app = express();
const port = process.env.PORT || 5000;

// DB Setup
// mongoose.connect('mongoose://localhost:auth/server', { 
//     useCreateIndex: true,
//     useNewUrlParser: true
// });
mongoose.connect('mongodb://localhost:auth/auth', { 
    useCreateIndex: true,
    useNewUrlParser: true
});

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Login
app.post('/signup', Authentication.signup);
app.post('/signin', requireSignin, Authentication.signin);

// Yelp call
app.get('/api/restaurants', (req, res) =>{
    const {query} = req
    console.log(query)
    const searchRequest = {
      term: query.searchTerm,
      location: query.searchLocation,
      price: "2",
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