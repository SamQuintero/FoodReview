import { Router } from 'express';
import { getHomePage, getRestaurantePage, addReview } from '../controllers/restaurante.controller.ts';

const router = Router();

router.get('/', getHomePage);

router.get('/restaurante/:id', getRestaurantePage);

router.post('/review', addReview);

export default router;