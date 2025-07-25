const User = require('../models/User');
const bcrypt = require ('bcryptjs');
const jwt  = require('jsonwebtoken');

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(409)
        .json({ message: "User already exists", success: false });
    }

    const newUser = new User({ username, email, password });
    User.password = await bcrypt.hash(password, 10);
    await newUser.save();

    res.status(201).json({ message: "signup successful", success: true });
  } catch (error) {
    res.status(500).json({ message: "internal server error", success: false });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }); // i will change to user if it brings problem
    if (!user) {
      return res
        .status(401)
        .json({
          message: "Authentication failed: Invalid credentials",
          success: false,
        });
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (isPassEqual) {
      return res
        .status(403)
        .json({ message: "Auth failed 0r password is wrong", success: false });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.status(200).json({
      message: "login successful",
      jwtToken,
      email,
      username: user.username,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "internal server error", success: false });
  }
};







module.exports = {
  signup,
  login
};