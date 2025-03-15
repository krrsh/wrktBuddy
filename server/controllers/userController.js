const User = require("../models/userModel");
const createToken = require("../utils/token");

//login controller

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginData = await User.login(email, password, User);

    //create token
    const token = createToken(loginData._id);

    res.status(200).json({ email, password,  token});
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

//signup controller

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await User.signup(email, password, User);

    //create token
    const token = createToken(userData._id);

    res.status(200).json({ email, password, token });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = { login, signup };
