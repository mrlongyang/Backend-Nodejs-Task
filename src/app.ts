import playerRoutes from './routes/player.route';
import walletRoutes from './routes/wallet.route';
import referralRoutes from './routes/referral.route';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(express.json());
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

