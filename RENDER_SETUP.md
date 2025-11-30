# 🚀 Render Setup Guide - Step by Step

## ❌ Error: "No render.yaml found on main branch"

Iska solution - **Manual Configuration** karein (easiest way):

---

## ✅ Solution: Manual Setup (Recommended)

### Step 1: GitHub Repository Check
1. Confirm ki `render.yaml` file repository mein hai
2. Push karein agar nahi hai:
   ```bash
   git add render.yaml backend/render.yaml
   git commit -m "Add render.yaml configuration"
   git push origin main
   ```

### Step 2: Render Dashboard Setup (No render.yaml needed!)

**render.yaml ki zarurat nahi hai!** Manual setup zyada easy hai:

---

## 📋 Complete Render Setup (Manual)

### Step 1: Create Account & Connect
1. Go to: https://render.com
2. Click **"Get Started for Free"**
3. Sign up with **GitHub**
4. Authorize Render

### Step 2: Create Web Service

1. **Dashboard** mein **"New +"** button click karo
2. **"Web Service"** select karo
3. **"Connect GitHub"** click karo
4. Repository select karo: `ca-website`
5. Click **"Connect"**

### Step 3: Configure Service

**Basic Settings:**
- **Name**: `ca-website-backend`
- **Region**: Select closest (Singapore/Oregon)
- **Branch**: `main`
- **Runtime**: `Node`

**⚠️ IMPORTANT - Build & Start Commands:**

**Root Directory:**
- Click **"Advanced"** dropdown
- **Root Directory**: `backend` ✅

**Build Command:**
```
npm install
```

**Start Command:**
```
npm start
```

**Plan:**
- Select **FREE** ✅

### Step 4: Environment Variables

**"Environment"** section mein click karo, phir **"Add Environment Variable"**:

Add these one by one:

```
MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/ca-website?retryWrites=true&w=majority
JWT_SECRET = your-generated-jwt-secret
PORT = 5000
NODE_ENV = production
EMAIL_USER = your-email@gmail.com
EMAIL_PASS = your-gmail-app-password
FRONTEND_URL = https://your-frontend.vercel.app
```

**Note**: `FRONTEND_URL` baad mein add karenge jab frontend deploy ho jaye.

### Step 5: Deploy

1. Scroll down
2. Click **"Create Web Service"**
3. Wait 5-10 minutes for first deployment
4. Deployment complete hone ke baad URL copy karo:
   ```
   https://ca-website-backend.onrender.com
   ```

---

## 🔄 Alternative: Using render.yaml

Agar render.yaml use karna hai:

### Option A: Root Directory (render.yaml in root)

1. **Root mein `render.yaml`** file already hai
2. Render automatically detect kar lega
3. Render dashboard mein:
   - **Build Command**: Leave empty (auto from yaml)
   - **Start Command**: Leave empty (auto from yaml)

### Option B: Backend Directory (backend/render.yaml)

1. **Backend folder mein `render.yaml`** file already hai
2. Render dashboard mein:
   - **Root Directory**: `backend`
   - Build/Start commands auto-detect honge

---

## 📝 Quick Checklist

### Before Deploy:
- [ ] Repository GitHub par push ho chuka hai
- [ ] render.yaml files repository mein hain
- [ ] MongoDB Atlas ready hai
- [ ] Environment variables ready hain

### During Deploy:
- [ ] Render account created
- [ ] GitHub connected
- [ ] Repository selected
- [ ] Root Directory: `backend` ✅
- [ ] Build Command: `npm install`
- [ ] Start Command: `npm start`
- [ ] Plan: FREE ✅
- [ ] Environment variables added
- [ ] Deploy button clicked

### After Deploy:
- [ ] Deployment successful
- [ ] Backend URL copied
- [ ] Test: Backend URL opens (shows "API is running...")

---

## 🆘 Troubleshooting

### Issue 1: "No render.yaml found"
**Solution**: 
- Manual configuration use karein (recommended)
- Ya render.yaml file push karein GitHub par

### Issue 2: Build Failed
**Check:**
- Root Directory: `backend` ✅
- Build Command: `npm install` ✅
- package.json exists in backend folder ✅

### Issue 3: Start Command Failed
**Check:**
- Start Command: `npm start` ✅
- server.js exists in backend folder ✅
- PORT environment variable set ✅

### Issue 4: MongoDB Connection Failed
**Check:**
- MONGO_URI format correct hai
- IP whitelisted (0.0.0.0/0)
- Password correct hai

---

## 💡 Best Practice

**Recommendation**: 
- **Manual Setup** use karein (easier)
- render.yaml optional hai
- Dashboard se sab configure karein

---

## ✅ Success Indicators

After deployment:
- ✅ Build logs show "npm install" successful
- ✅ Start logs show "Server running on port..."
- ✅ URL opens: "API is running..."
- ✅ No errors in logs

---

**Total Setup Time: 10-15 minutes** ⏱️

