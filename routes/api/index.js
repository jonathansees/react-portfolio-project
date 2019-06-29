const router = require("express").Router();
const restaurantsRoutes = require("./restaurants");

// Restaurant routes
router.use("/restaurants", restaurantsRoutes);

module.exports = router;