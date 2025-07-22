import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const createToken = (user) =>
  jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: 'Email already registered' });

    const newUser = await User.create({ username, email, password });
    const token = createToken(newUser);

    res.cookie('token', token, { httpOnly: true }).status(201).json({ user: newUser.username });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = createToken(user);
    res.cookie('token', token, { httpOnly: true }).json({ user: user.username });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};
