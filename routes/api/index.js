const router = require("express").Router();
const restaurantsRoutes = require("./restaurants.js");

// Restaurant routes
router.use("/", restaurantsRoutes);

module.exports = router;