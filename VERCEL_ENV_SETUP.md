# 🔧 Vercel Environment Variable Setup

## Backend URL Add Karna Hai Vercel Mein

### Step 1: Vercel Dashboard Mein Jao

1. Go to: **https://vercel.com**
2. Login karo (GitHub se)
3. **Dashboard** mein jao
4. **Your Project** click karo (`ca-website` ya jo naam diya ho)

---

### Step 2: Project Settings

1. Project page par **"Settings"** tab click karo
2. Left sidebar mein **"Environment Variables"** click karo

---

### Step 3: Environment Variable Add Karo

1. **"Add New"** button click karo (ya **"Add Environment Variable"**)

2. Fill these fields:

   **Key:**
   ```
   VITE_API_URL
   ```

   **Value:**
   ```
   https://ca-website-backend.onrender.com/api
   ```

   **⚠️ IMPORTANT**: 
   - URL ke end mein `/api` zaruri hai
   - `https://` include karna zaruri hai

   **Environments:**
   - ✅ Production
   - ✅ Preview
   - ✅ Development
   
   (Sab checkboxes select karein)

3. **"Save"** button click karo

---

### Step 4: Redeploy

Environment variable add karne ke baad, redeploy zaruri hai:

**Option 1: Automatic**
- Vercel automatically redeploy kar sakta hai
- Ya manual redeploy karein

**Option 2: Manual Redeploy**
1. **"Deployments"** tab par jao
2. Latest deployment par **"..."** (three dots) click karo
3. **"Redeploy"** select karo
4. Confirm karo

---

## ✅ Verification

Environment variable add hone ke baad:

1. **"Deployments"** tab check karo
2. Latest deployment logs mein check karo ki build successful hai
3. Website open karo - API calls backend ko connect honi chahiye

---

## 🔍 Quick Reference

**Backend URL:** `https://ca-website-backend.onrender.com/api`

**Environment Variable:**
```
Key: VITE_API_URL
Value: https://ca-website-backend.onrender.com/api
```

---

## 📝 Next Steps

Environment variable add karne ke baad:

1. ✅ Redeploy frontend
2. ✅ Test website - API calls working
3. ✅ Backend CORS update (FRONTEND_URL add karein Render mein)

---

## 🆘 Troubleshooting

### Issue: Environment Variable Not Working

**Solution:**
- Redeploy zaruri hai after adding environment variable
- Check logs for errors
- Verify URL format: `https://...onrender.com/api`

### Issue: API Calls Failing

**Check:**
- Backend URL correct hai
- `/api` end mein hai
- Backend service running hai (Render dashboard check karo)

---

## ✅ Done!

Environment variable add karne ke baad, frontend backend se connect ho jayega!

**Next:** Backend mein FRONTEND_URL add karein for CORS!

