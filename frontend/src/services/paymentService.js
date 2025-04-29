import axiosClient from './axiosClient';

const PaymentService = {
  createCheckoutSession: (bookingData) => axiosClient.post('/payments/create-checkout-session', bookingData),
};

export default PaymentService;
