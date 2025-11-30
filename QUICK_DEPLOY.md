# ⚡ Quick Deployment Guide

Quick steps to deploy your CA Associates website.

## 🎯 5-Minute Deployment

### Backend (Render - FREE Forever) - 3 minutes

1. Go to https://render.com → Sign up with GitHub (FREE)
2. Click **"New +"** → **"Web Service"**
3. Connect GitHub repository: `ca-website`
4. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: **FREE** ✅
5. Go to **Environment Variables** → Add these:

```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/ca-website
JWT_SECRET=generate-random-32-char-string
PORT=5000
NODE_ENV=production
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=gmail-app-password
FRONTEND_URL=https://your-frontend.vercel.app
```

6. Click **"Create Web Service"**
7. Copy your Render URL (e.g., `https://xxx.onrender.com`)

**Note**: Free tier sleeps after 15 min. First request takes 30-50 seconds.

---

### Frontend (Vercel) - 2 minutes

1. Go to https://vercel.com → Sign up with GitHub
2. Click **"Add New Project"** → Import your repo
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Go to **Environment Variables** → Add:

```
VITE_API_URL=https://xxx.onrender.com/api
```

5. Click **Deploy** → Copy your Vercel URL

---

### Update Backend CORS - 1 minute

1. Go back to Render Dashboard
2. Select your service → **Environment** tab
3. Add/Update environment variable:

```
FRONTEND_URL=https://your-vercel-url.vercel.app
```

4. Click **"Save Changes"** → Auto-redeploy

---

## ✅ Done!

Your website is now live! 🎉

- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-app.onrender.com`

---

## 📝 Setup Checklist

- [ ] MongoDB Atlas account created
- [ ] MongoDB cluster created & connection string ready
- [ ] Gmail app password generated
- [ ] Backend deployed to Railway
- [ ] Frontend deployed to Vercel
- [ ] All environment variables set
- [ ] CORS updated with frontend URL
- [ ] Test the website

---

## 🔑 Generate Secrets

**JWT Secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**MongoDB Atlas:**
1. Create free cluster
2. Create database user
3. Whitelist IP: `0.0.0.0/0`
4. Get connection string

**Gmail App Password:**
1. Enable 2FA on Gmail
2. Generate app password: Google Account → Security → App passwords

---

## 📚 Full Guide

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

