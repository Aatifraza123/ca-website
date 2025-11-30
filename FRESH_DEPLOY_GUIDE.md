# 🚀 Fresh Deployment Guide - Complete Setup

Complete guide for deploying CA Associates Website from scratch.

---

## 📋 Pre-Deployment Checklist

### 1. MongoDB Atlas Setup ✅
- [ ] Account created
- [ ] Free cluster created
- [ ] Database user created
- [ ] IP whitelisted (0.0.0.0/0)
- [ ] Connection string ready

### 2. Gmail App Password ✅
- [ ] 2FA enabled
- [ ] App password generated (16 characters)

### 3. GitHub Repository ✅
- [ ] Code pushed to GitHub
- [ ] Repository URL: `https://github.com/Aatifraza123/ca-website`

---

## 🔧 Step 1: Backend Deployment (Render)

### Create New Web Service:

1. **Go to**: https://render.com
2. **Sign up** with GitHub (if not already)
3. **Dashboard** → **"New +"** → **"Web Service"**
4. **Connect GitHub** → Select repository: `ca-website`

### Configure Settings:

**Basic Settings:**
- **Name**: `ca-website-backend`
- **Region**: Singapore or Oregon (closest)
- **Branch**: `main`
- **Runtime**: `Node`

**⚠️ IMPORTANT - Root Directory:**
- Click **"Advanced"** dropdown
- **Root Directory**: `backend` ✅

**Build & Start:**
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: Select **FREE** ✅

### Environment Variables (Add ALL):

Go to **"Environment"** section → Click **"Add Environment Variable"** for each:

```
1. MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/ca-website?retryWrites=true&w=majority

2. JWT_SECRET = your-generated-jwt-secret (32+ characters)

3. PORT = 5000

4. NODE_ENV = production

5. EMAIL_USER = your-email@gmail.com

6. EMAIL_PASS = your-gmail-app-password

7. FRONTEND_URL = https://your-frontend.vercel.app (add after frontend deploys)

8. RAZORPAY_KEY_ID = your-razorpay-key (optional)

9. RAZORPAY_KEY_SECRET = your-razorpay-secret (optional)
```

### Deploy:

1. Click **"Create Web Service"**
2. Wait 5-10 minutes
3. Copy backend URL: `https://ca-website-backend.onrender.com`

### Test Backend:

Visit: `https://ca-website-backend.onrender.com`
Should see: "API is running..."

---

## 🎨 Step 2: Frontend Deployment (Vercel)

### Create New Project:

1. **Go to**: https://vercel.com
2. **Sign up** with GitHub (if not already)
3. **"Add New Project"** → Import repository: `ca-website`

### Configure Settings:

**Framework Settings:**
- **Framework Preset**: `Vite` (auto-detected)
- **Root Directory**: `frontend` ⚠️ IMPORTANT!
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables (CRITICAL):

**Before deploying**, add environment variable:

1. Go to **"Environment Variables"** section
2. Click **"Add"**
3. Fill:
   ```
   Key: VITE_API_URL
   Value: https://ca-website-backend.onrender.com/api
   ```
   **⚠️ Note**: Use your actual backend URL from Render!

4. **Environments**: Select ALL ✅
   - ✅ Production
   - ✅ Preview
   - ✅ Development

5. **Save**

### Deploy:

1. Click **"Deploy"**
2. Wait 2-3 minutes
3. Copy frontend URL: `https://ca-website.vercel.app`

---

## 🔄 Step 3: Update Backend CORS

### Add Frontend URL to Backend:

1. **Render Dashboard** → Your backend service
2. Go to **"Environment"** tab
3. Add/Update environment variable:
   ```
   Key: FRONTEND_URL
   Value: https://your-frontend.vercel.app
   ```
   (Use your actual Vercel URL)

4. Click **"Save Changes"**
5. Render will auto-redeploy

---

## ✅ Step 4: Verify Everything

### Test Frontend:
1. Visit your Vercel URL
2. Open Browser Console (F12)
3. Go to **Network** tab
4. Try to:
   - Navigate pages
   - Submit contact form
   - Try admin login

### Check API Calls:
- Should see: `https://ca-website-backend.onrender.com/api/*`
- Should NOT see: `localhost:5000` or frontend URL

---

## 🎯 Quick Reference

### Backend URL (Render):
```
https://ca-website-backend.onrender.com
```

### Frontend URL (Vercel):
```
https://your-app.vercel.app
```

### Environment Variables:

**Backend (Render):**
- MONGO_URI
- JWT_SECRET
- PORT = 5000
- NODE_ENV = production
- EMAIL_USER
- EMAIL_PASS
- FRONTEND_URL (add after frontend deploys)

**Frontend (Vercel):**
- VITE_API_URL = https://ca-website-backend.onrender.com/api

---

## ⚠️ Common Mistakes to Avoid:

1. ❌ Not setting Root Directory (`backend` for backend, `frontend` for frontend)
2. ❌ Forgetting to add environment variables
3. ❌ Not redeploying after adding environment variables
4. ❌ Using wrong backend URL in frontend env var
5. ❌ Missing `/api` at end of `VITE_API_URL`

---

## 📝 Deployment Checklist:

### Backend:
- [ ] Render account created
- [ ] Web service created
- [ ] Root Directory: `backend`
- [ ] Build Command: `npm install`
- [ ] Start Command: `npm start`
- [ ] All environment variables added
- [ ] Backend deployed
- [ ] Backend URL copied

### Frontend:
- [ ] Vercel account created
- [ ] Project created
- [ ] Root Directory: `frontend`
- [ ] VITE_API_URL environment variable added
- [ ] All environments selected
- [ ] Frontend deployed
- [ ] Frontend URL copied

### Final:
- [ ] Backend CORS updated (FRONTEND_URL)
- [ ] Website tested
- [ ] API calls working

---

## 🎉 Success Indicators:

- ✅ Backend shows "API is running..."
- ✅ Frontend loads without errors
- ✅ Network tab shows backend URL calls
- ✅ No localhost calls
- ✅ No CORS errors
- ✅ Login works
- ✅ Contact form works

---

**Ready to deploy fresh? Follow these steps!** 🚀

