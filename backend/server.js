// server.js
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';

// Import Routes
import authRoutes from './src/routes/authRoutes.js';
import workspaceRoutes from './src/routes/workspaceRoutes.js';
import bookingRoutes from './src/routes/bookingRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import paymentRoutes from './src/routes/paymentRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();

// Middleware Setup
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
  optionsSuccessStatus: 200, // Fix for some cloud providers (like Render/Vercel preflight)
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/workspaces', workspaceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/payments', paymentRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); // Exit process if DB connection fails
  }
};

// Server Initialization
const startServer = async () => {
  await connectDB();
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    }
  });
};

// Start the app
startServer();
