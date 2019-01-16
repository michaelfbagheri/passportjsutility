const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("./models/user")

module.exports = function (passport) {

    // serialize user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id)
    })
    // and vise-versa
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user)
        })
    })
    //local login strategy 
    passport.use(new LocalStrategy({
        usernameField: "username",
        passwordField: "password"
    },
        function (username, password, done) {
            User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            });
        }
    ));



}
