# 🚨 URGENT: 404 Error Fix

## ❌ Problem:
```
https://ca-website-puce.vercel.app/api/contacts → 404 Not Found
```

**Reason**: Frontend is calling its own URL instead of backend!

---

## ✅ IMMEDIATE FIX (3 Steps):

### Step 1: Vercel Environment Variable (CRITICAL!)

1. **Go to**: https://vercel.com
2. **Your Project** → **Settings** → **Environment Variables**
3. **Add/Edit**:
   ```
   Key: VITE_API_URL
   Value: https://ca-website-backend.onrender.com/api
   ```
4. **Environments**: ✅ Production ✅ Preview ✅ Development (ALL)
5. **Save**

---

### Step 2: REDEPLOY Frontend (VERY IMPORTANT!)

**⚠️ Environment variables are injected at BUILD TIME in Vite!**

1. **Deployments** tab → Latest deployment
2. **"..."** (three dots) → **"Redeploy"**
3. **⚠️ IMPORTANT**: **UNCHECK** "Use existing Build Cache"
4. Click **"Redeploy"**
5. Wait 2-3 minutes

**Without redeploy, environment variable won't work!**

---

### Step 3: Verify

After redeploy:
1. Open website: `https://ca-website-puce.vercel.app`
2. Open Browser Console (F12)
3. Try contact form
4. Check Network tab - should see:
   ```
   ✅ POST https://ca-website-backend.onrender.com/api/contacts
   ```
   
   NOT:
   ```
   ❌ POST https://ca-website-puce.vercel.app/api/contacts
   ```

---

## 📝 Why This Happens:

### Vite Environment Variables:
- Must start with `VITE_`
- Injected **at BUILD TIME only**
- If not set during build, default value is used

### Current Situation:
- `VITE_API_URL` not set in Vercel
- Code defaults to: `http://localhost:5000/api`
- In production, relative URLs resolve to frontend domain
- Result: Frontend calls itself → 404

---

## ✅ Expected After Fix:

**Before:**
```
❌ POST https://ca-website-puce.vercel.app/api/contacts → 404
```

**After:**
```
✅ POST https://ca-website-backend.onrender.com/api/contacts → 200 OK
```

---

## 🎯 Quick Checklist:

- [ ] Vercel → Settings → Environment Variables
- [ ] Add: `VITE_API_URL = https://ca-website-backend.onrender.com/api`
- [ ] Select ALL environments
- [ ] Save
- [ ] **Redeploy** (Build Cache OFF)
- [ ] Test website

---

## ⚠️ Important Notes:

1. **Redeploy is MANDATORY** - environment variables only work after rebuild
2. **Build Cache must be disabled** - to ensure fresh build
3. **Wait for build to complete** - usually 2-3 minutes

---

**This is the solution to your 404 error!** ✅

