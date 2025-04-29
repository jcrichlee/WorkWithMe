import { useState } from 'react';
import PaymentService from '../services/paymentService';

const BookingForm = ({ workspaceId }) => {
  const [dates, setDates] = useState({ start: '', end: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await PaymentService.createCheckoutSession({
        workspaceId,
        title: "Booking Workspace", // optional dynamic
        price: 15, // TODO: Dynamic price from workspace
      });
      window.location.href = res.data.url;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="date"
        name="start"
        className="w-full p-3 border rounded"
        value={dates.start}
        onChange={(e) => setDates({ ...dates, start: e.target.value })}
        required
      />
      <input
        type="date"
        name="end"
        className="w-full p-3 border rounded"
        value={dates.end}
        onChange={(e) => setDates({ ...dates, end: e.target.value })}
        required
      />
      <button type="submit" className="w-full p-3 bg-accent text-white rounded hover:bg-blue-700">
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
