import express from 'express';
import { createCheckoutSession } from '../controllers/paymentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create-checkout-session', protect, createCheckoutSession);

export default router;
// This code defines a route for creating a checkout session using Stripe. It imports the necessary modules, including express, the createCheckoutSession controller, and the protect middleware for authentication. The router is set up to handle POST requests to the '/create-checkout-session' endpoint, which will call the createCheckoutSession function after ensuring the user is authenticated. Finally, the router is exported for use in other parts of the application.