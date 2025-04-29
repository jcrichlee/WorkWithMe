import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  const { workspaceId, startDate, endDate } = req.body;
  const booking = new Booking({
    user: req.user._id,
    workspace: workspaceId,
    startDate,
    endDate
  });

  const created = await booking.save();
  res.status(201).json(created);
};

export const getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate('workspace');
  res.json(bookings);
};
