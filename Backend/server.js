const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require ('cors');
require('dotenv').config();
const connectDB = require('./db'); // Import the connectDB function
const authRouter = require('./routes/authRouter.js'); 

// Connect to MongoDB
connectDB();


app.use(cors({
  origin: 'http://localhost:5173/', // Specific origin for credentials
  credentials: true  // Allow credentials
}));

const corsOptions = {
  origin: 'http://localhost:5173', // <-- This is your React app's URL
  optionsSuccessStatus: 200 // For older browsers
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cors());
app.use('/auth',authRouter);


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`)
})