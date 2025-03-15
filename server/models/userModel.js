const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static function for signup
userSchema.statics.signup = async (email, password) => {
  const exists = await User.findOne({ email });
  if (exists) {
    throw Error("Email already exists!");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({ email, password: hash });

  return user;
};

//static function for login
userSchema.statics.login = async (email, password)=>{
    const user = await User.findOne({email});
    if(!user){
        throw Error("Incorrect email!")
    }
    const pass = await bcrypt.compare(password, user.password)
    if(!pass){
        throw Error("Incorrect password!")
    }
    return user
}

const User = new mongoose.model("user", userSchema);

module.exports = User;
