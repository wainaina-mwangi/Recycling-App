// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to DB
connectDB();

// Middleware
// Replace with your frontend domain during deployment
// const allowedOrigins = ['http://localhost:3000', 'https://your-frontend.vercel.app'];

// app.use(cors({
//   origin: allowedOrigins,
//   credentials: true, // allows cookies/auth headers if needed
// }));

app.use(cors());
app.use(express.json());

const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const { protect } = require('./middlewares/authMiddleware');

// 404 & error handler middlewares
app.use(notFound);
app.use(errorHandler);

// Example Routes
const recyclerRoutes = require('./routes/recyclerRoutes');
const requestRoutes = require('./routes/requestRoutes');
const pickupRoutes = require('./routes/pickupRoutes');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/api/recyclers', recyclerRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/pickups', pickupRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);




// Start Server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
  });
});
