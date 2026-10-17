import { Doctor } from '../models/Doctor.js';

export const createDoctor = async (data) => await Doctor.create(data);
export const getAllDoctors = async () => await Doctor.find();
