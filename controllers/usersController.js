const db = require("../models");

module.exports = {
    findAny: function (req, res) {
        console.log("username: " + req.body.username)
        console.log("passwrod: " + req.body.password)
        db.Users.findOne({ "username": req.body.username }, function (err, user) {
            if (err) {
                res.status(500).send(err);
            }
            else if (user) {
                // res.status(500).send(user + 'a user with the same user name already existins in the database, please choose new username')
                console.log(`this user already exists ${user}`)
            }
            else {
                console.log("trying to create a new record")
                var record = new Users();
                record.username = req.body.username;
                record.password = record.hashPassword(req.body.password);
                record.save(function (err, user) {
                    if (err) {
                        res.status(500).send('db error')
                    }
                    else {
                        res.send(user)
                    }
                })
            }
        })
    }
};

