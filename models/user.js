const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fName: {
    type: String,
    require: true
  },
  lName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  create_at: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.getEmail = function () {
  return this.email;
};

UserSchema.statics.getAllUsers = function(cb) {
  User.find({}, (err, users) => {
    if (err) return cb(err);
    cb(users);
  });
};

const User = mongoose.model('User', UserSchema);
module.exports = User;