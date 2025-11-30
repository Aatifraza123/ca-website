# 🚀 Deployment Process - Step by Step

Complete deployment guide for CA Associates Website.

---

## 📋 Pehle Ye Karein (Prerequisites)

### 1. MongoDB Atlas Setup (5 minutes)

1. **Sign up**: https://www.mongodb.com/cloud/atlas
2. **Create Free Cluster**:
   - Click "Build a Database"
   - Choose **FREE (M0)** tier
   - Select region (closest to you)
   - Click "Create"
   - Wait 3-5 minutes for cluster creation

3. **Create Database User**:
   - Go to "Database Access"
   - Click "Add New Database User"
   - Username: `ca-admin` (or any)
   - Password: Generate strong password (SAVE IT!)
   - Database User Privileges: "Atlas admin"
   - Click "Add User"

4. **Whitelist IP Address**:
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String**:
   - Go to "Database" → Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your database password
   - Replace `<dbname>` with `ca-website`
   
   Example:
   ```
   mongodb+srv://ca-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/ca-website?retryWrites=true&w=majority
   ```

---

### 2. Gmail App Password Setup (3 minutes)

1. **Enable 2-Factor Authentication**:
   - Go to Google Account: https://myaccount.google.com
   - Security → 2-Step Verification → Enable

2. **Generate App Password**:
   - Security → App passwords
   - Select app: "Mail"
   - Select device: "Windows Computer" (or any)
   - Click "Generate"
   - Copy 16-character password (SAVE IT!)

---

### 3. JWT Secret Generate (1 minute)

Terminal mein run karein:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the output - ye aapka JWT_SECRET hai.

---

## 🔧 Backend Deployment (Render - FREE Forever)

### Step 1: Render Account (1 minute)
1. Go to: https://render.com
2. Click **"Get Started for Free"**
3. Sign up with GitHub
4. Authorize Render to access GitHub

### Step 2: Create Web Service (2 minutes)
1. Dashboard mein **"New +"** button click karo
2. **"Web Service"** select karo
3. **"Connect GitHub"** → Select repository: `ca-website`
4. Click **"Connect"**

### Step 3: Configure Backend (5 minutes)

**A. Basic Settings:**
- **Name**: `ca-website-backend`
- **Region**: Select closest (Singapore/Oregon)
- **Branch**: `main`
- **Root Directory**: `backend` ⚠️ IMPORTANT
- **Runtime**: `Node`
- **Plan**: Select **FREE** ✅

**B. Build & Start:**
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**C. Add Environment Variables:**
Click **"Advanced"** → Scroll to **"Environment Variables"** → Click **"Add Environment Variable"** for each:

```
MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/ca-website?retryWrites=true&w=majority
JWT_SECRET = your-generated-jwt-secret-here
PORT = 5000
NODE_ENV = production
EMAIL_USER = your-email@gmail.com
EMAIL_PASS = your-16-char-gmail-app-password
FRONTEND_URL = https://your-frontend.vercel.app (baad mein update karenge)
```

**D. Deploy:**
1. Click **"Create Web Service"**
2. Wait 5-10 minutes for first deployment
3. Copy your URL: `https://ca-website-backend.onrender.com` (BACKEND_URL)

**Note**: Free tier sleeps after 15 min inactivity. First request takes 30-50 seconds to wake up (auto-wakes).

---

## 🎨 Frontend Deployment (Vercel)

### Step 1: Vercel Account (1 minute)
1. Go to: https://vercel.com
2. Click "Sign Up" → "Continue with GitHub"
3. Authorize Vercel

### Step 2: Import Project (2 minutes)
1. Click **"Add New Project"**
2. Select your repository: `ca-website`
3. Vercel will auto-detect it

### Step 3: Configure Frontend (3 minutes)

**A. Framework Settings:**
- **Framework Preset**: `Vite` (auto-detected)
- **Root Directory**: `frontend` (click "Edit" and set to `frontend`)
- **Build Command**: `npm run build` (auto-filled)
- **Output Directory**: `dist` (auto-filled)
- **Install Command**: `npm install` (auto-filled)

**B. Environment Variables:**
1. Scroll down to **"Environment Variables"**
2. Click **"Add"**
3. Key: `VITE_API_URL`
4. Value: `https://YOUR-RAILWAY-URL.railway.app/api` (backend URL + `/api`)
5. Click "Save"

**C. Deploy:**
1. Click **"Deploy"**
2. Wait 2-3 minutes
3. Copy your Vercel URL (FRONTEND_URL)

---

## 🔄 Update Backend CORS

Frontend URL milne ke baad:

1. **Go back to Render Dashboard**
2. Select your service: `ca-website-backend`
3. Go to **Environment** tab
4. Add/Update: `FRONTEND_URL` = `https://your-vercel-url.vercel.app`
5. Click **"Save Changes"**
6. Render will auto-redeploy

---

## ✅ Testing

### 1. Test Backend:
- Visit: `https://your-backend.onrender.com`
- Should see: "API is running..."
- Note: First load might take 30-50 seconds (waking up)

### 2. Test Frontend:
- Visit: `https://your-frontend.vercel.app`
- Website should load

### 3. Test Features:
- Home page loads
- Contact form works
- Blog posts display
- Admin login works

---

## 📝 Quick Reference

### Environment Variables Summary

**Backend (Railway):**
```
MONGO_URI = mongodb+srv://...
JWT_SECRET = ...
PORT = 5000
NODE_ENV = production
EMAIL_USER = ...
EMAIL_PASS = ...
FRONTEND_URL = https://...
```

**Frontend (Vercel):**
```
VITE_API_URL = https://backend-url.railway.app/api
```

---

## 🆘 Common Issues

### Issue 1: Backend not connecting to MongoDB
- Check MONGO_URI format
- Verify IP is whitelisted (0.0.0.0/0)
- Check password is correct

### Issue 2: CORS Error
- Make sure FRONTEND_URL is set in Railway
- Wait for redeploy

### Issue 3: Email not sending
- Verify Gmail app password
- Check 2FA is enabled

### Issue 4: Build failed
- Check logs in Railway/Vercel
- Verify all environment variables are set

---

## 🎉 Success!

After deployment:
- ✅ Website is live
- ✅ Backend API is working
- ✅ Database connected
- ✅ Email sending works

**Your website URLs:**
- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-app.railway.app`

---

## 📚 Need More Help?

- Check `DEPLOYMENT.md` for detailed guide
- Check `QUICK_DEPLOY.md` for quick reference
- Check Railway/Vercel logs for errors

---

**Total Time: ~20-30 minutes** ⏱️

