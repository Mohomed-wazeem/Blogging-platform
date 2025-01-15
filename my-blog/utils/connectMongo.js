import mongoose from 'mongoose';

const connectMongo = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      mongoose.set('strictQuery', true); // Optional: Suppress deprecation warnings for query filters

      // Connect to MongoDB
      await mongoose.connect(process.env.MONGO_DB); // Ensure this uses a valid connection string
      console.log("MongoDB connected successfully to:", mongoose.connection.name);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
      throw new Error("Database connection failed");
    }
  } else {
    console.log("MongoDB already connected, state:", mongoose.connection.readyState);
  }
};

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.warn('MongoDB disconnected. Attempting to reconnect...');
});

export default connectMongo;
