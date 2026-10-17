import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  documentId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
}, { timestamps: true });

export const Patient = mongoose.model('Patient', patientSchema);
