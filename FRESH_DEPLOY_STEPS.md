# 🚀 Fresh Deployment - Step by Step

Complete guide for fresh deployment of CA Associates Website.

---

## 📋 IMPORTANT: Before Starting

Make sure you have:
- ✅ MongoDB Atlas connection string
- ✅ Gmail app password
- ✅ JWT_SECRET generated
- ✅ GitHub repository ready

---

## 🔧 Part 1: Backend Deployment (Render) - NEW SERVICE

### Step 1: Create Render Account
1. Go to: **https://render.com**
2. Sign up with **GitHub**
3. Authorize Render

### Step 2: Create New Web Service
1. Dashboard → **"New +"** button
2. Select **"Web Service"**
3. **"Connect GitHub"** → Select repository: `ca-website`
4. Click **"Connect"**

### Step 3: Configure Service

**Basic Settings:**
```
Name: ca-website-backend
Region: Singapore (or closest)
Branch: main
Runtime: Node
```

**⚠️ CRITICAL - Root Directory:**
1. Click **"Advanced"** dropdown
2. **Root Directory**: Type `backend` ✅

**Build & Start Commands:**
```
Build Command: npm install
Start Command: npm start
Plan: FREE ✅
```

### Step 4: Environment Variables

Scroll to **"Environment Variables"** → Click **"Add Environment Variable"** for each:

```
1. MONGO_URI
   Value: mongodb+srv://username:password@cluster.mongodb.net/ca-website?retryWrites=true&w=majority

2. JWT_SECRET
   Value: [your-32-character-secret]

3. PORT
   Value: 5000

4. NODE_ENV
   Value: production

5. EMAIL_USER
   Value: your-email@gmail.com

6. EMAIL_PASS
   Value: [your-gmail-app-password]

7. FRONTEND_URL
   Value: [leave empty for now, add after frontend deploys]

8. RAZORPAY_KEY_ID (optional)
   Value: [your-razorpay-key]

9. RAZORPAY_KEY_SECRET (optional)
   Value: [your-razorpay-secret]
```

### Step 5: Deploy Backend
1. Scroll down
2. Click **"Create Web Service"**
3. Wait 5-10 minutes
4. **Copy Backend URL**: `https://ca-website-backend.onrender.com`

### Step 6: Test Backend
Visit: `https://ca-website-backend.onrender.com`
Should see: **"API is running..."**

---

## 🎨 Part 2: Frontend Deployment (Vercel) - NEW PROJECT

### Step 1: Create Vercel Account
1. Go to: **https://vercel.com**
2. Sign up with **GitHub**
3. Authorize Vercel

### Step 2: Create New Project
1. Dashboard → **"Add New Project"**
2. **"Import Git Repository"**
3. Select: `ca-website`
4. Click **"Import"**

### Step 3: Configure Project

**⚠️ IMPORTANT - Root Directory:**
1. Click **"Edit"** next to Root Directory
2. Change to: `frontend` ✅
3. Press Enter

**Framework Settings:**
```
Framework Preset: Vite (auto-detected)
Build Command: npm run build (auto)
Output Directory: dist (auto)
Install Command: npm install (auto)
```

### Step 4: Environment Variables (BEFORE DEPLOY!)

**⚠️ CRITICAL: Add this BEFORE clicking Deploy!**

1. Scroll to **"Environment Variables"**
2. Click **"Add New"**
3. Fill:
   ```
   Key: VITE_API_URL
   Value: https://ca-website-backend.onrender.com/api
   ```
   **⚠️ Important**: 
   - Use your actual backend URL from Render
   - Must end with `/api`
   
4. **Environments**: Select ALL ✅
   - ✅ Production
   - ✅ Preview
   - ✅ Development

5. Click **"Add"** or **"Save"**

### Step 5: Deploy Frontend
1. Scroll to bottom
2. Click **"Deploy"**
3. Wait 2-3 minutes
4. **Copy Frontend URL**: `https://ca-website.vercel.app`

---

## 🔄 Part 3: Connect Frontend & Backend

### Update Backend CORS:

1. Go back to **Render Dashboard**
2. Select your backend service: `ca-website-backend`
3. Go to **"Environment"** tab
4. Add/Update environment variable:
   ```
   Key: FRONTEND_URL
   Value: https://your-frontend.vercel.app
   ```
   (Use your actual Vercel frontend URL)

5. Click **"Save Changes"**
6. Render will auto-redeploy

---

## ✅ Part 4: Testing

### Test Frontend:
1. Visit: `https://your-frontend.vercel.app`
2. Open Browser Console (F12)
3. Go to **Network** tab

### Test API Calls:
- Navigate to Portfolio page
- Try Contact form
- Try Admin login

### Check Network Tab:
Should see:
```
✅ POST https://ca-website-backend.onrender.com/api/contacts
✅ GET https://ca-website-backend.onrender.com/api/portfolio
✅ POST https://ca-website-backend.onrender.com/api/auth/login
```

Should NOT see:
```
❌ http://localhost:5000/api/*
❌ https://your-frontend.vercel.app/api/*
```

---

## 📝 Quick Reference

### Backend (Render):
- URL: `https://ca-website-backend.onrender.com`
- Root: `backend`
- Build: `npm install`
- Start: `npm start`

### Frontend (Vercel):
- URL: `https://your-app.vercel.app`
- Root: `frontend`
- Build: `npm run build`
- Output: `dist`
- Env Var: `VITE_API_URL = https://backend-url.onrender.com/api`

---

## 🎯 Most Common Mistakes:

1. ❌ Wrong Root Directory (must be `backend` and `frontend`)
2. ❌ Forgetting environment variables
3. ❌ Not adding `/api` at end of VITE_API_URL
4. ❌ Deploying frontend BEFORE setting VITE_API_URL
5. ❌ Not updating FRONTEND_URL in backend after frontend deploys

---

## 🎉 Success!

After deployment:
- ✅ Website loads
- ✅ API calls go to backend
- ✅ No CORS errors
- ✅ Login works
- ✅ All forms work

---

**Follow these steps carefully for fresh deployment!** 🚀

