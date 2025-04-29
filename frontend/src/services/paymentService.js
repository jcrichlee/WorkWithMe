import axiosClient from './axiosClient';

const PaymentService = {
  createCheckoutSession: (data) => axiosClient.post('/payments/create-checkout-session', data),
};

export default PaymentService;
