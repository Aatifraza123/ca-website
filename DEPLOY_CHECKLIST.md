# ✅ Deployment Checklist

Complete checklist for deploying CA Associates Website.

---

## 📋 Pre-Deployment (Setup)

### MongoDB Atlas
- [ ] Account created at mongodb.com/cloud/atlas
- [ ] Free cluster created (M0 tier)
- [ ] Database user created (username + password saved)
- [ ] IP whitelisted (0.0.0.0/0)
- [ ] Connection string copied and formatted

### Gmail Setup
- [ ] 2-Factor Authentication enabled
- [ ] App password generated (16 characters saved)

### Secrets Generated
- [ ] JWT_SECRET generated and saved
- [ ] All passwords saved securely

---

## 🔧 Backend Deployment (Railway)

### Railway Setup
- [ ] Account created (railway.app)
- [ ] GitHub connected
- [ ] New project created
- [ ] Repository selected

### Backend Configuration
- [ ] Root directory set to `backend`
- [ ] MONGO_URI environment variable added
- [ ] JWT_SECRET environment variable added
- [ ] PORT = 5000 added
- [ ] NODE_ENV = production added
- [ ] EMAIL_USER added
- [ ] EMAIL_PASS added
- [ ] Backend deployed successfully
- [ ] Backend URL copied

---

## 🎨 Frontend Deployment (Vercel)

### Vercel Setup
- [ ] Account created (vercel.com)
- [ ] GitHub connected
- [ ] Project imported

### Frontend Configuration
- [ ] Root directory set to `frontend`
- [ ] Framework preset: Vite
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] VITE_API_URL environment variable added (with backend URL)
- [ ] Frontend deployed successfully
- [ ] Frontend URL copied

---

## 🔄 Final Configuration

### CORS Update
- [ ] FRONTEND_URL added to Railway backend variables
- [ ] Backend redeployed with CORS update

---

## ✅ Testing

### Backend Testing
- [ ] Backend URL opens (shows "API is running...")
- [ ] API endpoints accessible
- [ ] Database connection working

### Frontend Testing
- [ ] Frontend URL opens
- [ ] Home page loads correctly
- [ ] Navigation works
- [ ] Contact form works
- [ ] Blog posts display
- [ ] Portfolio shows

### Admin Testing
- [ ] Admin login works
- [ ] Dashboard loads
- [ ] Can create/edit blog posts
- [ ] Can manage services
- [ ] Can view contacts/consultations

### Email Testing
- [ ] Contact form sends email
- [ ] Consultation form sends email
- [ ] Newsletter subscription works

---

## 🎉 Deployment Complete!

### Final URLs
- [ ] Frontend URL saved: `https://...`
- [ ] Backend URL saved: `https://...`

### Documentation
- [ ] URLs documented
- [ ] Environment variables documented
- [ ] Access credentials saved securely

---

## 📊 Status

**Deployment Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Complete

**Date Deployed:** ___________

**Notes:**
________________________________
________________________________

---

**Total Checklist Items:** 40+
**Estimated Time:** 20-30 minutes

