import { players } from '../models/player.model';

export function getReferredPlayers(playerId: string) {
  const player = players.find((p) => p.id === playerId);
  if (!player) {
    throw new Error('Player not found');
  }

  return player.referrals.map((refId) => players.find((p) => p.id === refId)).filter(Boolean);
}

export function getReferralEarnings(playerId: string) {
  const player = players.find((p) => p.id === playerId);
  if (!player) {
    throw new Error('Player not found');
  }

  return {
    registrationBonus: player.wallet.referralBonusFromRegistration,
    depositBonus: player.wallet.referralBonusFromDeposit,
    totalBonus: player.wallet.referralBonusFromRegistration + player.wallet.referralBonusFromDeposit,
  };
}
