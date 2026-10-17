import { Router } from 'express';
import * as doctorController from '../controllers/doctorController.js';

const router = Router();
router.post('/', doctorController.create);
router.get('/', doctorController.getAll);

export default router;
