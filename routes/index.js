const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const signinRoute = require("./auth/signin");
const signupRoute = require("./auth/signup");

// API Routes
router.use("/api", apiRoutes);
router.use("/signin", signinRoute);
router.use("/signup", signupRoute);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    router.use(path.join(__dirname, 'client/build'));
        
    // Handle React routing, return all requests to React app
    router.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

module.exports = router;