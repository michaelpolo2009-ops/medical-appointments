import { Router } from 'express';
import * as patientController from '../controllers/patientController.js';

const router = Router();
router.post('/', patientController.create);
router.get('/', patientController.getAll);

export default router;
