const mongoose = require('mongoose');

// Replace this with your actual MongoDB connection string
// It typically looks like:
// 'mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority'
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://RECYCLING:recycling-mern@cluster0.oxgkdpr.mongodb.net/RECYCLING-WEB?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,      // Deprecated in Mongoose 6+, but harmless
      useUnifiedTopology: true,   // Deprecated in Mongoose 6+, but harmless
      // You might add other options here if needed, e.g., connectTimeoutMS, socketTimeoutMS
    });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;