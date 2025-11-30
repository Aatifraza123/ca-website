# 🚨 CRITICAL: localhost:5000 Still Being Called

## ❌ Error:
```
Access to XMLHttpRequest at 'http://localhost:5000/api/auth/login' 
from origin 'https://ca-website-puce.vercel.app' has been blocked by CORS policy
```

## 🔍 Problem:

Frontend is **STILL calling `localhost:5000`** instead of backend URL!

**This means**: Environment variable `VITE_API_URL` is **NOT SET** in Vercel or **NOT LOADED** during build.

---

## ✅ COMPLETE FIX (Step by Step):

### Step 1: Check Vercel Environment Variable

1. Go to: **https://vercel.com**
2. **Your Project** → **Settings** → **Environment Variables**
3. **LOOK for**: `VITE_API_URL`
4. **Check Value**: Should be `https://ca-website-backend.onrender.com/api`

**If MISSING or WRONG:**

### Step 2: Add/Update Environment Variable

1. Click **"Add New"** (or edit existing)
2. Fill:
   ```
   Key: VITE_API_URL
   Value: https://ca-website-backend.onrender.com/api
   ```
3. **⚠️ CRITICAL**: Select **ALL environments**:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development
4. Click **"Save"**

---

### Step 3: REDEPLOY (WITHOUT CACHE!)

**This is the MOST IMPORTANT step!**

1. Go to **"Deployments"** tab
2. Latest deployment → **"..."** (three dots)
3. Click **"Redeploy"**
4. **⚠️ IMPORTANT OPTIONS**:
   - **Environment**: Production ✅
   - **Use existing Build Cache**: ❌ **UNCHECK THIS!**
5. Click **"Redeploy"**
6. **Wait 2-3 minutes** for build to complete

**Why no cache?**
- Environment variables are injected **at BUILD TIME**
- Old cache = old build = no environment variable
- Fresh build = new environment variable loaded

---

### Step 4: Verify Environment Variable in Build

After redeploy, check build logs:

1. Go to deployment logs
2. Look for environment variables section
3. Should see: `VITE_API_URL=https://ca-website-backend.onrender.com/api`

---

### Step 5: Test Website

After redeploy completes:

1. Open: `https://ca-website-puce.vercel.app`
2. Open **Browser Console** (F12)
3. Go to **Network** tab
4. Try to login
5. **Check**: API calls should go to:
   ```
   ✅ https://ca-website-backend.onrender.com/api/auth/login
   ```
   
   NOT:
   ```
   ❌ http://localhost:5000/api/auth/login
   ```

---

## 🔍 Why This Happens:

### Vite Environment Variables:
```javascript
baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
```

**If `VITE_API_URL` is not set:**
- Defaults to: `http://localhost:5000/api`
- In production build, this creates calls to localhost
- Browser blocks it (CORS error)

**If `VITE_API_URL` IS set:**
- Uses: `https://ca-website-backend.onrender.com/api`
- All API calls go to backend ✅

---

## 📝 Quick Checklist:

- [ ] Vercel → Settings → Environment Variables
- [ ] Verify `VITE_API_URL` exists
- [ ] Value: `https://ca-website-backend.onrender.com/api`
- [ ] All environments selected (Production, Preview, Development)
- [ ] Save
- [ ] Go to Deployments tab
- [ ] Redeploy latest deployment
- [ ] **UNCHECK "Use existing Build Cache"**
- [ ] Wait for build to complete
- [ ] Test website - check Network tab

---

## ⚠️ Common Mistakes:

1. ❌ Setting env var but not redeploying
2. ❌ Redeploying WITH cache enabled
3. ❌ Setting env var for only one environment
4. ❌ Wrong URL format (missing `/api` at end)

---

## ✅ Correct Configuration:

**Vercel Environment Variable:**
```
Key: VITE_API_URL
Value: https://ca-website-backend.onrender.com/api
Environments: Production, Preview, Development (ALL)
```

**After Redeploy:**
- Build logs show env var loaded
- Website calls backend URL
- No more localhost calls
- No CORS errors

---

## 🎯 Expected Result:

**Before:**
```
❌ POST http://localhost:5000/api/auth/login → CORS Error
```

**After:**
```
✅ POST https://ca-website-backend.onrender.com/api/auth/login → Success
```

---

**This WILL fix the issue! Follow all steps carefully!** ✅

