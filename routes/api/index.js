const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const authRoutes = require("./auth");

// Book routes
router.use("/books", bookRoutes);
router.use("/signup", authRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
