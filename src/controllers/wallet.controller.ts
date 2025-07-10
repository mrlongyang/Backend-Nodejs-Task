import { Request, Response } from 'express';
import { deposit, withdraw } from '../services/wallet.service';

export const handleDeposit = (req: Request, res: Response) => {
  try {
    const { playerId, amount } = req.body;
    if (!playerId || typeof amount !== 'number') {
      return res.status(400).json({ message: 'playerId and amount are required' });
    }

    const wallet = deposit(playerId, amount);
    return res.status(200).json({ message: 'Deposit successful', wallet });
  } catch (err) {
    return res.status(400).json({ message: (err as Error).message });
  }
};

export const handleWithdraw = (req: Request, res: Response) => {
  try {
    const { playerId, amount } = req.body;
    if (!playerId || typeof amount !== 'number') {
      return res.status(400).json({ message: 'playerId and amount are required' });
    }

    const wallet = withdraw(playerId, amount);
    return res.status(200).json({ message: 'Withdrawal successful', wallet });
  } catch (err) {
    return res.status(400).json({ message: (err as Error).message });
  }
};
