// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import mongoose from 'mongoose';

// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import morgan from 'morgan';

// import authRoutes from './src/routes/authRoutes.js';
// import workspaceRoutes from './src/routes/workspaceRoutes.js';
// import bookingRoutes from './src/routes/bookingRoutes.js';
// import adminRoutes from './src/routes/adminRoutes.js';
// import paymentRoutes from './src/routes/paymentRoutes.js';


// const app = express();

// // Middleware
// app.use(cors({
//   origin: process.env.CLIENT_URL,
//   credentials: true,
// }));
// app.use(express.json());
// app.use(cookieParser());
// app.use(morgan('dev'));

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/workspaces', workspaceRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/payments', paymentRoutes);

// // Root
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch((err) => console.error(err));

// // Server Start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.js
import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
