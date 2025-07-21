const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// ✅ Initialize Express app FIRST before using it
const app = express();

// ✅ CORS setup (allow credentials)
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend port
  credentials: true
}));

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
const recyclerRoutes = require('./routes/recyclerRoutes');
const requestRoutes = require('./routes/requestRoutes');
const pickupRoutes = require('./routes/pickupRoutes');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

// Use Routes
app.use('/api/recyclers', recyclerRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/pickups', pickupRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Error handling middleware
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
