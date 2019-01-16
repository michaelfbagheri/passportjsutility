const router = require("express").Router();
const userController = require("../../controllers/usersController");

// route for api/auth
console.log('test 123');
router.route("/")
    .post(userController.findAny);

module.exports = router;