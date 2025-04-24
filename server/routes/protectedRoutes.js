import express from 'express';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected test route
router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the protected dashboard!' });
});

export default router;
