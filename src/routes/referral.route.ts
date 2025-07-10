import express from 'express';
import { fetchReferredPlayers, fetchReferralEarnings } from '../controllers/referral.controller';

const router = express.Router();

router.get('/:playerId/list', fetchReferredPlayers);
router.get('/:playerId/earnings', fetchReferralEarnings);

export default router;
