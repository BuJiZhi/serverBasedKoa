const JwtSrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const secretOrKey = require('../config/keys').secretOrKey

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey

const mongoose = require('mongoose')
const User = mongoose.model('users')

module.exports = passport => {
  passport.use(
    new JwtSrategy(opts, async function(jwt_payload, done) {
      const user = await User.findById(jwt_payload.id)
      if (user) {
        //filter
        return done(null, user)
      } else {
        return done(null, false)
      }
    })
  )
}