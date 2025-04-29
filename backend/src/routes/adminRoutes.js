import express from 'express';
import { getUsers, deleteUser, getAllBookings } from '../controllers/adminController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/users', protect, admin, getUsers);
router.delete('/user/:id', protect, admin, deleteUser);
router.get('/bookings', protect, admin, getAllBookings);

export default router;
// This code defines the routes for the admin functionality of the application. It imports necessary modules and middleware, and sets up routes for getting users, deleting a user, and getting all bookings. The routes are protected by authentication and authorization middleware to ensure that only admin users can access them.
// The routes are then exported for use in the main application.