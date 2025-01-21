import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI : string = process.env.MY_MONGO_DB_DATABASE_URL || '';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            ssl: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

export default connectDB;
