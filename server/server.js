import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js'; // ✅ NEW LINE

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5009;

// ✅ Connect to MongoDB Atlas
connectDB();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api', eventRoutes);
app.use('/api', protectedRoutes); // ✅ Paste this below eventRoutes

// ✅ Test route
app.get('/', (req, res) => {
  res.send('✅ VigrithBook backend is running...');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
