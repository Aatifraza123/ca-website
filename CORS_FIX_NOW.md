# 🔧 CORS Error Fix - URGENT

## ✅ Good News:
Frontend is now calling the correct backend URL! ✅
```
https://ca-website-backend.onrender.com/api/auth/login
```

## ❌ Current Error:
```
CORS policy: No 'Access-Control-Allow-Origin' header
```

**Reason**: Backend doesn't have the new frontend URL in allowed origins.

---

## ✅ SOLUTION: Update Backend CORS

### Step 1: Render Dashboard

1. Go to: **https://render.com**
2. Login → Select your service: `ca-website-backend`
3. Go to **"Environment"** tab

### Step 2: Add/Update FRONTEND_URL

**Add or Update environment variable:**

```
Key: FRONTEND_URL
Value: https://ca-website-it5v.vercel.app
```

**⚠️ Important**: 
- Use your exact Vercel frontend URL
- Include `https://`
- No trailing slash

### Step 3: Save & Wait

1. Click **"Save Changes"**
2. Render will **auto-redeploy** (takes 2-3 minutes)
3. Wait for deployment to complete

---

## 🔍 How CORS Works:

The backend code checks `FRONTEND_URL` environment variable:

```javascript
const allowedOrigins = process.env.FRONTEND_URL 
  ? [
      process.env.FRONTEND_URL,  // Your Vercel URL
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:5175'
    ]
  : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'];
```

**If `FRONTEND_URL` is not set:**
- Only localhost URLs allowed
- Production frontend blocked ❌

**If `FRONTEND_URL` IS set:**
- Your Vercel URL allowed ✅
- CORS works ✅

---

## ✅ Quick Fix Steps:

1. **Render** → Your service → **Environment** tab
2. Add/Update: `FRONTEND_URL = https://ca-website-it5v.vercel.app`
3. **Save Changes**
4. Wait 2-3 minutes for redeploy
5. Test website again

---

## 🎯 Expected After Fix:

**Before:**
```
❌ CORS Error: No 'Access-Control-Allow-Origin' header
```

**After:**
```
✅ Login successful
✅ API calls work
✅ No CORS errors
```

---

## 📝 Verification:

After backend redeploys:

1. Visit: `https://ca-website-it5v.vercel.app`
2. Try admin login
3. Should work without CORS error ✅

---

**This is the final fix! Just add FRONTEND_URL in Render!** ✅

