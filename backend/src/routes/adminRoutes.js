import express from 'express';
import { getUsers, deleteUser, getAllBookings } from '../controllers/adminController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/users', protect, admin, getUsers);
router.delete('/users/:id', protect, admin, deleteUser);
router.get('/bookings', protect, admin, getAllBookings);

export default router;
