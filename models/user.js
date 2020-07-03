//require mongoose
var mongoose = require("mongoose");
// to encrypt the password
var bcrypt = require("bcrypt");

//User schema
var userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

//mongoose's version of middleware, it will encrypt the password before saving
userSchema.pre("save", function (next) {
  //it will check if the password have been modified already, if not it will hash it
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});

//to compare the plain text we recieve from client with the hashed password
userSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return callback(err);
    else {
      if (!isMatch) return callback(null, isMatch);
      return callback(null, this); //this >> is the user object
    }
  });
};

module.exports = mongoose.model("User", userSchema);
