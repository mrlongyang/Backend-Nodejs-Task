import { Wallet } from './wallet';

export interface Player {
     id: string;
     name: string;
     phone: string;
     password: string;
     ipAddress: string;
     originUrl: string;
     referredBy?: string;
     wallet: Wallet;
     referrals: string[]; // array of player IDs referred
}