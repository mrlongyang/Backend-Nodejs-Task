import { Request, Response } from 'express';
import { getReferredPlayers, getReferralEarnings } from '../services/referral.service';

export const fetchReferredPlayers = (req: Request, res: Response) => {
  try {
    const { playerId } = req.params;

    const referredPlayers = getReferredPlayers(playerId);
    return res.status(200).json({ referredPlayers });
  } catch (err) {
    return res.status(400).json({ message: (err as Error).message });
  }
};

export const fetchReferralEarnings = (req: Request, res: Response) => {
  try {
    const { playerId } = req.params;

    const earnings = getReferralEarnings(playerId);
    return res.status(200).json({ referralEarnings: earnings });
  } catch (err) {
    return res.status(400).json({ message: (err as Error).message });
  }
};
