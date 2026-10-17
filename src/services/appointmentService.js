import { Appointment } from '../models/Appointment.js';

export const scheduleAppointment = async (data) => {
  const { patientId, doctorId, dateTime, reason } = data;

  if (!patientId || !doctorId || !dateTime || !reason) {
    const error = new Error('Los campos patientId, doctorId, dateTime y reason son obligatorios');
    error.statusCode = 400;
    throw error;
  }

  const conflict = await Appointment.findOne({
    doctorId,
    dateTime: new Date(dateTime),
    status: { $ne: 'CANCELADA' }
  });

  if (conflict) {
    const error = new Error('El médico ya tiene una cita asignada en esa fecha y hora');
    error.statusCode = 409;
    throw error;
  }

  return await Appointment.create({
    patientId,
    doctorId,
    dateTime: new Date(dateTime),
    reason,
    status: 'PENDIENTE'
  });
};

export const getAppointments = async () => {
  return await Appointment.find()
    .populate('patientId', 'fullName documentId')
    .populate('doctorId', 'fullName specialty');
};

export const getAppointmentById = async (id) => {
  const appointment = await Appointment.findById(id).populate('patientId').populate('doctorId');
  if (!appointment) {
    const error = new Error('Cita no encontrada');
    error.statusCode = 404;
    throw error;
  }
  return appointment;
};

export const updateAppointmentStatus = async (id, status) => {
  const validStatuses = ['PENDIENTE', 'COMPLETADA', 'CANCELADA'];
  if (!validStatuses.includes(status)) {
    const error = new Error('Estado no permitido. Debe ser PENDIENTE, COMPLETADA o CANCELADA');
    error.statusCode = 400;
    throw error;
  }

  const updated = await Appointment.findByIdAndUpdate(id, { status }, { new: true });
  if (!updated) {
    const error = new Error('Cita no encontrada');
    error.statusCode = 404;
    throw error;
  }
  return updated;
};

export const cancelAppointment = async (id) => {
  return await updateAppointmentStatus(id, 'CANCELADA');
};
