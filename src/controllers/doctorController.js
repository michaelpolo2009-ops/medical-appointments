import * as doctorService from '../services/doctorService.js';

export const create = async (req, res) => {
  try {
    const doctor = await doctorService.createDoctor(req.body);
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const doctors = await doctorService.getAllDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
