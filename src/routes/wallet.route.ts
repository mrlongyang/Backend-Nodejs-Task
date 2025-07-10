import express from 'express';
import { handleDeposit, handleWithdraw } from '../controllers/wallet.controller';

const router = express.Router();


router.post('/deposit', handleDeposit);
router.post('/withdraw', handleWithdraw);

export default router;