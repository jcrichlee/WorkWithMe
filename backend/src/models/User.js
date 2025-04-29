import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['seeker', 'host', 'admin'], default: 'seeker' },
}, { timestamps: true });

// Hash password before save
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Match password
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', UserSchema);
// This model defines the User schema for MongoDB using Mongoose. It includes fields for name, email, password, and role. The password is hashed before saving to the database, and a method is provided to compare entered passwords with the hashed password stored in the database.
// The role field can be 'seeker', 'host', or 'admin', with 'seeker' as the default. The schema also includes timestamps for created and updated times.