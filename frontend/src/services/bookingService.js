import axiosClient from './axiosClient';

const BookingService = {
  createBooking: (bookingData) => axiosClient.post('/bookings', bookingData),
  getMyBookings: () => axiosClient.get('/bookings/my'),
};

export default BookingService;
