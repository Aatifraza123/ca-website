# ✅ Fresh Deployment Checklist

Quick checklist for fresh deployment.

---

## 🔧 Backend (Render) - New Service

### Settings:
- [ ] Name: `ca-website-backend`
- [ ] Root Directory: `backend` ✅
- [ ] Build: `npm install`
- [ ] Start: `npm start`
- [ ] Plan: FREE

### Environment Variables (9):
- [ ] MONGO_URI
- [ ] JWT_SECRET
- [ ] PORT = 5000
- [ ] NODE_ENV = production
- [ ] EMAIL_USER
- [ ] EMAIL_PASS
- [ ] FRONTEND_URL (add after frontend)
- [ ] RAZORPAY_KEY_ID (optional)
- [ ] RAZORPAY_KEY_SECRET (optional)

### Deploy:
- [ ] Service created
- [ ] Deploy started
- [ ] Backend URL copied: `https://...onrender.com`

---

## 🎨 Frontend (Vercel) - New Project

### Settings:
- [ ] Root Directory: `frontend` ✅
- [ ] Framework: Vite
- [ ] Build: `npm run build`
- [ ] Output: `dist`

### Environment Variables (1):
- [ ] VITE_API_URL = `https://your-backend.onrender.com/api`
- [ ] All environments selected (Production, Preview, Development)

### Deploy:
- [ ] Project created
- [ ] Environment variable added BEFORE deploy
- [ ] Deploy started
- [ ] Frontend URL copied: `https://...vercel.app`

---

## 🔄 Final Steps

- [ ] Backend CORS: Add FRONTEND_URL in Render
- [ ] Test website
- [ ] Verify API calls go to backend

---

**Follow this checklist step by step!** ✅

