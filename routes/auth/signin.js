const router = require("express").Router();

const Authentication = require('../../controllers/authentication');
const passportService = require('../../services/passport');
const passport = require('passport');

const requireSignin = passport.authenticate('local', { session: false });

// Matches with "/signin"
router.route("/")
  .post(requireSignin, Authentication.signin);

module.exports = router;