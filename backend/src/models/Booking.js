import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
}, { timestamps: true });

export default mongoose.model('Booking', BookingSchema);
// This model defines the Booking schema for MongoDB using Mongoose. It includes fields for user, workspace, start date, end date, and status. The user and workspace fields are references to the User and Workspace models, respectively. The status field can be 'pending', 'confirmed', or 'cancelled', with 'pending' as the default. The schema also includes timestamps for created and updated times.
// This schema is used to manage bookings for workspaces, allowing users to book a workspace for a specific date range and track the status of their booking.