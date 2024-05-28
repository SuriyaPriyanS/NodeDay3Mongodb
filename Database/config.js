// Database/config.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (req,res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
     // useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
