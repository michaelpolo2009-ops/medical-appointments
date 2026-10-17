import { Router } from 'express';
import * as appointmentController from '../controllers/appointmentController.js';

const router = Router();
router.post('/', appointmentController.create);
router.get('/', appointmentController.getAll);
router.get('/:id', appointmentController.getById);
router.patch('/:id/status', appointmentController.updateStatus);
router.delete('/:id', appointmentController.cancel);

export default router;
