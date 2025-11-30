# ⚡ Render Setup - Quick Reference

## 🎯 5-Minute Quick Setup

### Step 1: Create Service
1. https://render.com → "New +" → "Web Service"
2. Connect GitHub → Select `ca-website`

### Step 2: Configure
```
Name: ca-website-backend
Root Directory: backend ✅
Build Command: npm install
Start Command: npm start
Plan: FREE
```

### Step 3: Environment Variables
Add these 7 variables:
```
MONGO_URI = mongodb+srv://...
JWT_SECRET = ...
PORT = 5000
NODE_ENV = production
EMAIL_USER = ...
EMAIL_PASS = ...
FRONTEND_URL = (baad mein)
```

### Step 4: Deploy
Click "Create Web Service" → Wait 5-10 min

### Step 5: Get URL
Copy: `https://ca-website-backend.onrender.com`

---

## ✅ Done!

Backend URL: `https://...onrender.com`

**Next**: Frontend deploy to Vercel!

---

## 📝 Important Notes

- ✅ render.yaml NOT needed for manual setup
- ⚠️ Root Directory: `backend` (must!)
- ⏰ First deploy: 5-10 minutes
- 😴 Free tier sleeps after 15 min (auto-wakes)

