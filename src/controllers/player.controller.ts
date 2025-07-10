import { Request, Response } from 'express';
import { registerPlayer, loginPlayer } from '../services/player.service';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, phone, password } = req.body;
    const referredByRaw = req.body.referredBy;

    if (!name || !phone || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const ip: string = typeof req.ip === 'string' ? req.ip : 'unknown';
    const originHeader = req.get('origin');
    const origin: string = typeof originHeader === 'string' ? originHeader : 'unknown';

    const referredBy: string | undefined =
      typeof referredByRaw === 'string' ? referredByRaw : undefined;

    const player = await registerPlayer(name, phone, password, ip, origin, referredBy);

    res.status(201).json({
      message: 'Player registered successfully',
      player: {
        id: player.id,
        name: player.name,
        phone: player.phone,
        wallet: player.wallet,
        referredBy: player.referredBy,
        referrals: player.referrals,
      },
    });
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(400).json({ message: 'Phone and password are required' });
    }

    const ip: string = typeof req.ip === 'string' ? req.ip : 'unknown';
    const originHeader = req.get('origin');
    const origin: string = typeof originHeader === 'string' ? originHeader : 'unknown';

    const player = await loginPlayer(phone, password, ip, origin);

    res.status(200).json({
      message: 'Login successful',
      player,
    });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(401).json({ message: (err as Error).message || 'Login failed' });
  }
};
