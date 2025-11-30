# 🚀 Render Manual Setup Guide - Step by Step

Complete guide for deploying backend to Render WITHOUT render.yaml (Manual Setup).

---

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ MongoDB Atlas connection string ready
- ✅ JWT_SECRET generated
- ✅ Gmail app password ready
- ✅ GitHub repository pushed (ca-website)

---

## 🔧 Step-by-Step Manual Setup

### Step 1: Create Render Account (1 minute)

1. Go to: **https://render.com**
2. Click **"Get Started for Free"**
3. Click **"Continue with GitHub"**
4. Authorize Render to access your GitHub account
5. You're in! ✅

---

### Step 2: Create New Web Service (2 minutes)

1. **Dashboard** par **"New +"** button click karo (top right)
2. Dropdown se **"Web Service"** select karo
3. **"Connect GitHub"** button click karo
4. Repository list se **`ca-website`** select karo
5. Click **"Connect"** button

---

### Step 3: Configure Basic Settings (2 minutes)

**A. Basic Information:**

Fill these fields:

- **Name**: `ca-website-backend`
- **Region**: Select closest region (Singapore/Oregon recommended)
- **Branch**: `main` (ya jo branch use kar rahe ho)
- **Runtime**: `Node` (auto-detected)

**B. Plan Selection:**

- Select **"Free"** plan ✅

---

### Step 4: Build & Start Commands (2 minutes)

**⚠️ IMPORTANT - Root Directory Set Karein:**

1. **"Advanced"** dropdown click karo (bottom of form)
2. **"Root Directory"** field mein type karo: `backend` ✅
3. Ye zaruri hai!

**Build & Start Commands:**

- **Build Command**: 
  ```
  npm install
  ```

- **Start Command**: 
  ```
  npm start
  ```

---

### Step 5: Environment Variables (5 minutes)

Scroll down to **"Environment Variables"** section.

Click **"Add Environment Variable"** for each:

#### Variable 1: MONGO_URI
```
Key: MONGO_URI
Value: mongodb+srv://username:password@cluster.mongodb.net/ca-website?retryWrites=true&w=majority
```
*(Replace username, password, and cluster details with your MongoDB Atlas details)*

#### Variable 2: JWT_SECRET
```
Key: JWT_SECRET
Value: your-generated-jwt-secret-here
```
*(Generate using: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)*

#### Variable 3: PORT
```
Key: PORT
Value: 5000
```

#### Variable 4: NODE_ENV
```
Key: NODE_ENV
Value: production
```

#### Variable 5: EMAIL_USER
```
Key: EMAIL_USER
Value: your-email@gmail.com
```

#### Variable 6: EMAIL_PASS
```
Key: EMAIL_PASS
Value: your-16-char-gmail-app-password
```

#### Variable 7: FRONTEND_URL
```
Key: FRONTEND_URL
Value: https://your-frontend.vercel.app
```
**⚠️ Note**: Isko baad mein add karenge jab frontend deploy ho jaye. Pehle empty rakho ya placeholder.

#### Optional Variables (if using Razorpay):

#### Variable 8: RAZORPAY_KEY_ID
```
Key: RAZORPAY_KEY_ID
Value: your-razorpay-key-id
```

#### Variable 9: RAZORPAY_KEY_SECRET
```
Key: RAZORPAY_KEY_SECRET
Value: your-razorpay-key-secret
```

---

### Step 6: Deploy! (5-10 minutes)

1. Scroll to bottom
2. Click **"Create Web Service"** button
3. Render ab deploy start karega
4. Wait 5-10 minutes (first deployment takes time)
5. Deployment logs dekh sakte ho

**Success Indicators:**
- ✅ Build successful
- ✅ "Listening on port 5000" message
- ✅ "Your service is live" message

---

### Step 7: Get Your Backend URL (1 minute)

1. Deployment complete hone ke baad
2. Top par **"ca-website-backend"** click karo
3. Overview tab mein **URL** dikhega:
   ```
   https://ca-website-backend.onrender.com
   ```
4. **Copy this URL** - Ye aapka backend URL hai!

---

## ✅ Testing

### Test Backend:

1. Browser mein backend URL open karo:
   ```
   https://ca-website-backend.onrender.com
   ```
2. Should show: **"API is running..."**
3. Agar first time ho to 30-50 seconds lag sakta hai (waking up)

---

## 🔄 Update After Frontend Deploy

Jab frontend deploy ho jaye:

1. **Render Dashboard** → Your service
2. Go to **"Environment"** tab
3. Update `FRONTEND_URL`:
   ```
   FRONTEND_URL = https://your-frontend.vercel.app
   ```
4. Click **"Save Changes"**
5. Render auto-redeploy karega

---

## 📝 Quick Checklist

Before Deploy:
- [ ] MongoDB Atlas ready
- [ ] Connection string copied
- [ ] JWT_SECRET generated
- [ ] Gmail app password ready
- [ ] GitHub repository pushed

During Setup:
- [ ] Render account created
- [ ] GitHub connected
- [ ] Repository selected
- [ ] Name: `ca-website-backend`
- [ ] Root Directory: `backend` ✅
- [ ] Build Command: `npm install`
- [ ] Start Command: `npm start`
- [ ] Plan: FREE ✅
- [ ] All environment variables added
- [ ] Deploy button clicked

After Deploy:
- [ ] Deployment successful
- [ ] Backend URL copied
- [ ] Test: URL opens successfully
- [ ] Test: Shows "API is running..."

---

## 🆘 Troubleshooting

### Issue 1: Build Failed
**Check:**
- Root Directory: `backend` ✅
- Build Command: `npm install` ✅
- Check build logs for errors

### Issue 2: Start Failed
**Check:**
- Start Command: `npm start` ✅
- PORT environment variable set: `5000`
- Check start logs for errors

### Issue 3: MongoDB Connection Error
**Check:**
- MONGO_URI format correct
- IP whitelisted in MongoDB Atlas (0.0.0.0/0)
- Password is correct (URL encoded if special chars)

### Issue 4: Service Sleeping
**Info:**
- Free tier sleeps after 15 min inactivity
- First request takes 30-50 seconds to wake up
- This is normal for free tier

---

## 📊 Configuration Summary

### Settings:
```
Name: ca-website-backend
Region: (Your choice)
Branch: main
Runtime: Node
Root Directory: backend
Build Command: npm install
Start Command: npm start
Plan: Free
```

### Environment Variables (7 Required + 2 Optional):
```
1. MONGO_URI
2. JWT_SECRET
3. PORT = 5000
4. NODE_ENV = production
5. EMAIL_USER
6. EMAIL_PASS
7. FRONTEND_URL (update after frontend deploy)

Optional:
8. RAZORPAY_KEY_ID
9. RAZORPAY_KEY_SECRET
```

---

## 🎉 Success!

After deployment:
- ✅ Backend is live
- ✅ API endpoints working
- ✅ Database connected
- ✅ Ready for frontend connection

**Next Step**: Frontend deploy to Vercel!

---

## 💡 Tips

1. **Keep logs open** during first deployment
2. **Save backend URL** somewhere safe
3. **Test immediately** after deployment
4. **Add FRONTEND_URL** after frontend deploys
5. **Check logs** if anything fails

---

**Total Setup Time: 15-20 minutes** ⏱️

**Ready to start?** Follow steps 1-6 above! 🚀

