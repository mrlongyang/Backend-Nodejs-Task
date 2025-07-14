import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import playerRoutes from './routes/player.route';
import walletRoutes from './routes/wallet.route';
import referralRoutes from './routes/referral.route';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Global middlewares
app.use(cors({
  origin: 'http://localhost:3000', // or '*'
  credentials: true               // ✅ needed to allow cookies
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/players', playerRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/referrals', referralRoutes);

// Test Route
app.get('/', (req, res) => {
     res.send('API is running ...');
});

//Start Server
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});