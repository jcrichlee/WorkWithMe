**Full Project Documentation for WorkWithMe.**

---

# `/README.md`**

```markdown
# WorkWithMe

WorkWithMe is a platform connecting remote workers, freelancers, and entrepreneurs with nearby rentable workspaces.  
Users can browse, book, and host spaces — from a responsive website or installable PWA app.

---

## 🌐 Live Tech Stack

- **Frontend**: React (Vite + TailwindCSS + React Router + Axios + PWA via Capacitor)
- **Backend**: Node.js (Express + MongoDB + Mongoose + JWT Auth + Stripe Payments)
- **Hosting**: Vercel (Frontend) + Render (Backend)
- **Database**: MongoDB Atlas

---

## 📂 Project Structure

```plaintext
WorkWithMe-Project/
├── frontend/ (React Vite App)
├── backend/ (Express API Server)
├── README.md (This File)
```

---

## 🛠️ Local Development Setup

### 1. Clone Repository

```bash
git clone https://github.com/jcrichlee/WorkWithMe.git
cd WorkWithMe-Project
```

---

### 2. Setup Backend

```bash
cd backend
npm install
cp .env.example .env
```

**Edit `.env` and fill in:**

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
STRIPE_SECRET_KEY=your_stripe_secret
```

**Run Backend Locally:**

```bash
npm run dev
```
- Server runs on `http://localhost:5000`

---

### 3. Setup Frontend

```bash
cd frontend
npm install
cp .env.example .env
```

**Edit `.env`:**

```env
VITE_API_URL=http://localhost:5000/api
```

**Run Frontend Locally:**

```bash
npm run dev
```
- Frontend runs on `http://localhost:5173`

---

## 🚀 Production Deployment

### Frontend (Vercel)

- Import `frontend/` into Vercel
- Set Env Variables:
  - `VITE_API_URL=https://workwithme-backend.onrender.com/api`

### Backend (Render)

- Import `backend/` into Render
- Build Command: `npm install`
- Start Command: `npm start`
- Set Env Variables:
  - Same as `.env`

---

## 🧩 Main Features

- User Authentication (JWT & HttpOnly Cookies)
- Host Workspaces
- Browse & Book Workspaces
- Stripe Payments Integration
- Mobile Responsive (PWA-ready)
- Admin Dashboard (Manage Users + Bookings)

---

## 📱 Mobile App (Optional Capacitor Wrap)

After frontend build:

```bash
cd frontend
npm run build
npx cap add android
npx cap add ios
npx cap sync
npx cap open android
npx cap open ios
```

Deploy mobile apps via Google Play and Apple App Store.

---

## 💻 Useful Commands

| Action | Command |
|--------|---------|
| Start frontend dev server | `npm run dev` |
| Build frontend for production | `npm run build` |
| Start backend dev server | `npm run dev` |
| Start backend in production | `npm start` |

---

## 📄 License

MIT License © WorkWithMe Team