# 🔧 Environment Variable Issue - 405 Error

## ❌ Error:
```
POST https://ca-website-puce.vercel.app/api/contacts 405 (Method Not Allowed)
```

## 🔍 Problem:

Frontend is calling **frontend URL** instead of **backend URL**. This means:

1. **Environment variable `VITE_API_URL` is NOT set in Vercel**, OR
2. **Environment variable is not being read** during build

---

## ✅ SOLUTION: Check & Set Environment Variable

### Step 1: Verify Vercel Environment Variable

1. Go to: **https://vercel.com**
2. Your project → **Settings** → **Environment Variables**
3. Check if `VITE_API_URL` exists:
   ```
   Key: VITE_API_URL
   Value: https://ca-website-backend.onrender.com/api
   ```

### Step 2: If Missing or Wrong

**Add/Update Environment Variable:**

1. Click **"Add New"** (or edit existing)
2. Fill:
   ```
   Key: VITE_API_URL
   Value: https://ca-website-backend.onrender.com/api
   ```
3. **Environments**: Select ALL (Production, Preview, Development)
4. Click **"Save"**

### Step 3: REDEPLOY (CRITICAL!)

**Environment variables in Vite are injected at BUILD TIME!**

1. Go to **"Deployments"** tab
2. Latest deployment → **"..."** → **"Redeploy"**
3. **IMPORTANT**: Uncheck **"Use existing Build Cache"**
4. Click **"Redeploy"**
5. Wait for build to complete

---

## 🔍 Why This Happens:

### Vite Environment Variables:
- Must start with `VITE_`
- Must be present **at BUILD TIME**
- Not available at runtime if not set during build

### Current Code:
```javascript
baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
```

If `VITE_API_URL` is not set:
- Default: `http://localhost:5000/api`
- But in production, relative URLs resolve to frontend domain
- Result: Calls go to `https://ca-website-puce.vercel.app/api/*`

---

## ✅ Quick Checklist:

- [ ] Check Vercel → Settings → Environment Variables
- [ ] Verify `VITE_API_URL` is set to: `https://ca-website-backend.onrender.com/api`
- [ ] Verify all environments are selected (Production, Preview, Development)
- [ ] REDEPLOY with Build Cache disabled
- [ ] Wait for build to complete
- [ ] Test again

---

## 🎯 Expected After Fix:

After redeploy, API calls should go to:
```
✅ https://ca-website-backend.onrender.com/api/contacts
```

NOT:
```
❌ https://ca-website-puce.vercel.app/api/contacts
```

---

## 📝 Next Steps:

1. **URGENT**: Set environment variable in Vercel
2. **URGENT**: Redeploy (without cache)
3. **TEST**: Check if API calls go to backend

---

**This is the most likely cause of the 405 error!** ✅

