import axiosClient from './axiosClient';

const BookingService = {
  book: (data) => axiosClient.post('/bookings', data),
  myBookings: () => axiosClient.get('/bookings/me'),
};

export default BookingService;
