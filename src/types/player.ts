export interface Player {
     id: string;
     name: string;
     phone: string;
     password: string;
     ipAddress: string;
     originUrl: string;
     referredBy?: string;
     wallet: {
          balance: number; // ✅ correct spelling
          referralBonusFromRegistration: number;
          referralBonusFromDeposit: number;
          }
     referrals: string[]; // array of player IDs referred
}