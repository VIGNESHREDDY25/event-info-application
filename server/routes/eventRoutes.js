import express from 'express';
import { createEvent, getAllEvents, registerForEvent } from '../controllers/eventController.js';
import verifyToken from '../middleware/authMiddleware.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/events', getAllEvents);
router.post('/events', verifyToken, upload.single('image'), createEvent);
router.post('/events/register/:id', verifyToken, registerForEvent);

export default router;
