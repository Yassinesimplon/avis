import express from 'express';
import { createPlace } from '../Controllers/PlaceController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Crée une nouvelle publication de lieu (authentification requise)
router.post('/', protect, createPlace);






export default router;
