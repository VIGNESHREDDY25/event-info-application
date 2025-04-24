import express from 'express';
import { createEvent, getAllEvents, registerForEvent } from '../controllers/eventController.js';
import verifyToken from '../middleware/authMiddleware.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// Corrected: DO NOT prefix with `/events` here
router.get('/', getAllEvents);
router.post('/', verifyToken, upload.single('image'), createEvent);
router.post('/register/:id', verifyToken, registerForEvent);

export default router;
