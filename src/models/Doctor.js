import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  specialty: { type: String, required: true },
  email: { type: String, required: true, unique: true }
}, { timestamps: true });

export const Doctor = mongoose.model('Doctor', doctorSchema);
