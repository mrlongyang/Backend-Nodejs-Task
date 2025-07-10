# 🎮 Player Wallet API - Backend Node.js Task

A TypeScript-based REST API for managing player registration, login, wallet operations (deposit & withdrawal), and referral tracking.

---

## 📦 Features

✅ Player registration with:
- Unique 10-character player ID (5 letters + 5 digits)
- Hashed password
- IP & origin tracking
- Referral support

✅ Player login with hashed password check

✅ Wallet system:
- Deposit (100 - 100,000)
- Withdraw (up to balance)
- Referral deposit bonus (10%)

✅ Referral system:
- +100 bonus for referred registrations
- 10% bonus on deposits from referred players
- View referred players and referral earnings

---

## 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- bcryptjs (password hashing)
- ts-node-dev (live dev)
- In-memory storage (array) for demo

---

## 📁 Project Structure

src/
├── controllers/ # Request handlers (register, login, wallet)
├── models/ # In-memory data (players array)
├── routes/ # Express route definitions
├── services/ # Business logic for wallet, login, etc.
├── types/ # TypeScript types (Player)
├── utils/ # Helper functions (ID generator)
├── app.ts # Main entrypoint


---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/player-wallet-api.git
cd player-wallet-api
