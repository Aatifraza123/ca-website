# 🚨 URGENT: CORS Error Fix

## ❌ Current Error:
```
Access to XMLHttpRequest at 'http://localhost:5000/api/auth/login' 
from origin 'https://ca-website-puce.vercel.app' has been blocked by CORS policy
```

## 🔍 Root Cause:

Frontend **hardcoded `localhost:5000` URLs** use kar raha hai instead of production backend URL.

---

## ✅ IMMEDIATE FIX (2 Steps):

### Step 1: Vercel Environment Variable (CRITICAL)

**Vercel mein `VITE_API_URL` set karo:**

1. Go to: **https://vercel.com**
2. Your project → **Settings** → **Environment Variables**
3. Add/Update:
   ```
   Key: VITE_API_URL
   Value: https://ca-website-backend.onrender.com/api
   ```
4. **Environments**: Select ALL (Production, Preview, Development)
5. **Save**

### Step 2: REDEPLOY Frontend

**IMPORTANT**: Environment variables Vite mein **BUILD TIME** par inject hote hain!

1. Vercel Dashboard → **Deployments** tab
2. Latest deployment → **"..."** (three dots)
3. Click **"Redeploy"**
4. Wait 2-3 minutes

**Ye zaruri hai!** Bina redeploy ke environment variable kaam nahi karega.

---

## ✅ Step 3: Fix Hardcoded URLs in Code

Code mein hardcoded URLs fix kiye gaye hain. Ab push karna hai:

### Files Fixed:
- ✅ `frontend/src/context/AuthContext.jsx` - Fixed hardcoded URL

### Remaining Files to Fix:
Many other files still have hardcoded URLs (29 instances found).

**Quick Fix**: Sabko `api` instance se replace karna hoga.

---

## 🔧 Code Changes Made:

### AuthContext.jsx - FIXED ✅

**Before:**
```javascript
import axios from 'axios';
await axios.get('http://localhost:5000/api/auth/me', {...});
```

**After:**
```javascript
import api from '../api/axios';
await api.get('/auth/me', {...});
```

---

## 📝 Next Actions:

1. ✅ **Vercel**: Add `VITE_API_URL` environment variable
2. ✅ **Vercel**: Redeploy frontend (CRITICAL!)
3. ✅ **Git**: Push code changes (AuthContext fix)
4. ⏳ **Render**: Add `FRONTEND_URL` environment variable (for CORS)

---

## 🎯 Why This Happens:

**Vite Environment Variables:**
- `VITE_API_URL` must be present **at BUILD time**
- If not set, default value `http://localhost:5000/api` use hota hai
- Redeploy zaruri hai after setting environment variable

---

## ✅ Verification:

After redeploy, check:
1. Browser console - no more `localhost:5000` calls
2. Network tab - calls going to `https://ca-website-backend.onrender.com`
3. Login works

---

## 🚀 Priority Order:

1. **CRITICAL**: Vercel env var + Redeploy
2. **HIGH**: Push code fixes to GitHub
3. **HIGH**: Render CORS update (FRONTEND_URL)

---

**DO THIS NOW:**
1. Vercel mein environment variable add karo
2. Redeploy karo
3. Test karo

**Ye sabse important hai!** ✅

