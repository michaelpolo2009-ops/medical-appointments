import { Patient } from '../models/Patient.js';

export const createPatient = async (data) => await Patient.create(data);
export const getAllPatients = async () => await Patient.find();
