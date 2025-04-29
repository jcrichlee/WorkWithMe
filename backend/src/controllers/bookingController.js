import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  const { workspace, startDate, endDate } = req.body;
  const booking = await Booking.create({
    user: req.user.id,
    workspace,
    startDate,
    endDate,
  });
  res.status(201).json(booking);
};

export const getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate('workspace');
  res.json(bookings);
};
