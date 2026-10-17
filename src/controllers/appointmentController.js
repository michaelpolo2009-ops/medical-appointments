import * as appointmentService from '../services/appointmentService.js';

export const create = async (req, res) => {
  try {
    const appointment = await appointmentService.scheduleAppointment(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const list = await appointmentService.getAppointments();
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const appointment = await appointmentService.getAppointmentById(req.params.id);
    res.status(200).json(appointment);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const appointment = await appointmentService.updateAppointmentStatus(req.params.id, req.body.status);
    res.status(200).json(appointment);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const cancel = async (req, res) => {
  try {
    const canceled = await appointmentService.cancelAppointment(req.params.id);
    res.status(200).json({ message: 'Cita cancelada correctamente', appointment: canceled });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};
