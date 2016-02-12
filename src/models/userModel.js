var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')

var emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
var phoneRegex = /d{10}/
var SALT_WORK_FACTOR = 10

var userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone:{
    type: String
  },
  password: {
    type: String,
    required: true,
  },
  emailVerified: {
    type: Boolean,
    default: false
  }
});

userSchema.pre('save', function (next){
  var user = this;

  if (user.password.length < 8) {
    return next(new Error('Password should be atleast 8 characters'))
  }

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  })
})

userSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    var returnDoc = {}
    returnDoc._id = ret._id
    returnDoc.email = ret.email
    returnDoc.firstName = ret.firstName
    returnDoc.lastName = ret.lastName
    returnDoc.phone = ret.phone
    returnDoc.dob = ret.dob
    return returnDoc
  }
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
}

var User = mongoose.model('User', userSchema);

module.exports = User