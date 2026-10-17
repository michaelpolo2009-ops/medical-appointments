import * as patientService from '../services/patientService.js';

export const create = async (req, res) => {
  try {
    const patient = await patientService.createPatient(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const patients = await patientService.getAllPatients();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
