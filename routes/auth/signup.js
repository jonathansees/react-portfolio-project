const router = require("express").Router();

const Authentication = require('../../controllers/authentication');
const passportService = require('../../services/passport');

// Matches with "/signup"
router.route("/")
  .post(Authentication.signup);

module.exports = router;