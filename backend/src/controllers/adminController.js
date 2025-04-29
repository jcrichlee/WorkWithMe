import User from '../models/User.js';
import Booking from '../models/Booking.js';

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: 'User deleted' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
};

export const getAllBookings = async (req, res) => {
  const bookings = await Booking.find().populate('user').populate('workspace');
  res.json(bookings);
};
