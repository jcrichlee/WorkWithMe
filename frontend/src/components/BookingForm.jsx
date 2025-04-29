import { useState } from 'react';
import PaymentService from '../services/paymentService';

const BookingForm = ({ workspaceId }) => {
  const [dates, setDates] = useState({ start: '', end: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await PaymentService.createCheckoutSession({
        workspaceId,
        title: "Workspace Booking",
        price: 50 // Placeholder, should fetch dynamic if needed
      });
      window.location.href = res.data.url;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input type="date" name="start" value={dates.start} onChange={(e) => setDates({ ...dates, start: e.target.value })} className="input" required />
      <input type="date" name="end" value={dates.end} onChange={(e) => setDates({ ...dates, end: e.target.value })} className="input" required />
      <button type="submit" className="button-primary">Book Now</button>
    </form>
  );
};

export default BookingForm;
