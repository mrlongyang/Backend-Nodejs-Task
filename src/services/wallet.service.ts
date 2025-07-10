import { players } from '../models/player.model';

export function deposit(playerId: string, amount: number) {
  if (amount < 100 || amount > 100000) {
    throw new Error('Deposit amount must be between 100 and 100000');
  }

  const player = players.find((p) => p.id === playerId);
  if (!player) {
    throw new Error('Player not found');
  }

  player.wallet.balance += amount;

  // Handle referral bonus (10%)
  if (player.referredBy) {
    const parent = players.find((p) => p.id === player.referredBy);
    if (parent) {
      const bonus = Math.floor(amount * 0.1);
      parent.wallet.balance += bonus;
      parent.wallet.referralBonusFromDeposit += bonus;
    }
  }

  return player.wallet;
}

export function withdraw(playerId: string, amount: number) {
  const player = players.find((p) => p.id === playerId);
  if (!player) {
    throw new Error('Player not found');
  }

  if (amount <= 0 || amount > player.wallet.balance) {
    throw new Error('Invalid withdrawal amount');
  }

  player.wallet.balance -= amount;

  return player.wallet;
}
