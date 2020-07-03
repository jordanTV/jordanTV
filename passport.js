var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var JwtStrategy = require("passport-jwt").Strategy;
var User = require("./models/user");

//function that estract the jwt token from the request
var cookieExtractor = (req) => {
  var token = null;
  //check if there is a request and cookie is not empty
  if (req && req.cookies) {
    token = req.c;
    cookies["access_token"];
  }
  return token;
};

//to set a cookie when user is authenticated
//,(payload,done) section is verified callback
//payload is the data we set within our jwt function
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: "Rand13", //for token verification
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }
  )
);

// authenticated local strategy using username and password
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      //something went wrong
      if (err) return done(err);
      //if user doesn't exist
      if (!user) return done(null, false);
      //check if password is correct
      user.comparePassword(password, done);
    });
  })
);
