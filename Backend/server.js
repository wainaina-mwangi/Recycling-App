const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db'); // Import the connectDB function
const authRouter = require('./routes/authRouter.js'); 

// Connect to MongoDB
connectDB();

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:5173',           // Development URL
    'https://recycling-app-eotz.vercel.app'  // Production URL
  ],
  credentials: true,  // Allow credentials
  optionsSuccessStatus: 200 // For older browsers
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})
