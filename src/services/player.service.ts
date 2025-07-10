import bcrypt from 'bcryptjs';
import { players } from '../models/player.model';
import { generatePlayerId } from '../utils/idGenerator';
import { Player } from '../types/player';

export async function registerPlayer(
  name: string,
  phone: string,
  password: string,
  ipAddress: string,
  originUrl: string,
  referredBy?: string   // correctly marked as optional
): Promise<Player> {
  const hashedPassword = await bcrypt.hash(password, 10);
  const playerId = generatePlayerId();

  const newPlayer: Player = {
    id: playerId,
    name,
    phone,
    password: hashedPassword,
    ipAddress,
    originUrl,
    referredBy,
    wallet: {
     balance: 0,
     referralBonusFromRegistration: 0,
     referralBonusFromDeposit: 0,
    },

    referrals: [],
  };

  // ✅ Handle referral logic (if applicable)
  if (referredBy) {
    const parent = players.find((p) => p.id === referredBy);
    if (parent) {
      parent.wallet.referralBonusFromRegistration += 100;
      parent.wallet.balance += 100;
      parent.referrals.push(playerId);
    }
  }

  players.push(newPlayer);
  return newPlayer;
}

export async function loginPlayer(
  phone: string,
  password: string,
  ipAddress: string,
  originUrl: string
) {
  const player = players.find((p) => p.phone === phone);
  if (!player) {
    throw new Error('Player not found');
  }

  const passwordMatch = await bcrypt.compare(password, player.password);
  if (!passwordMatch) {
    throw new Error('Invalid credentials');
  }

  return {
    id: player.id,
    name: player.name,
    phone: player.phone,
    wallet: player.wallet,
    referredBy: player.referredBy,
    referrals: player.referrals,
    ipAddress,
    originUrl,
  };
}
