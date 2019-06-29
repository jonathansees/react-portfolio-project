const router = require("express").Router();
const restaurantsRoutes = require("./restaurants");

// Restaurant routes
router.use("/", restaurantsRoutes);

module.exports = router;