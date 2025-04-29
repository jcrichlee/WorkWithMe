import User from '../models/User.js';
import Workspace from '../models/Workspace.js';
import Booking from '../models/Booking.js';

export const getUsers = async (req, res) => {
  const users = await User.find({}).select('-password');
  res.json(users);
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};

export const getAllBookings = async (req, res) => {
  const bookings = await Booking.find({}).populate('user').populate('workspace');
  res.json(bookings);
};
