// const Authentication = require('./controllers/authentication');
// const passportService = require('./services/passport');
const passport = require('passport');
const path = require('path');

// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
//   app.get('/', requireAuth, function(req, res) {
//     res.send({ hi: 'there' });
//   });
//   app.post('/signin', requireSignin, Authentication.signin);
//   app.post('/signup', Authentication.signup);



  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
  
  app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
  });
  
  if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
}