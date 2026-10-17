import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  dateTime: { type: Date, required: true },
  reason: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['PENDIENTE', 'COMPLETADA', 'CANCELADA'], 
    default: 'PENDIENTE' 
  }
}, { timestamps: true });

appointmentSchema.index({ doctorId: 1, dateTime: 1 }, { unique: true });

export const Appointment = mongoose.model('Appointment', appointmentSchema);
