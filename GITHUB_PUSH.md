# GitHub Push Guide

## Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Sign in** to your account
3. **Click** the **"+" icon** (top right) → **"New repository"**
4. **Repository name**: `ca-website` (or any name you want)
5. **Description**: `CA Associates Website - Full Stack Application`
6. **Visibility**: Choose **Public** or **Private**
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. **Click** **"Create repository"**

---

## Step 2: Connect and Push

After creating the repository, GitHub will show you commands. Use these:

### Option A: Using HTTPS (Easy)

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ca-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: Using SSH (If you have SSH keys set up)

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin git@github.com:YOUR_USERNAME/ca-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Quick Commands (Copy-Paste Ready)

After creating the repo, replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ca-website.git
git branch -M main
git push -u origin main
```

---

## Important Notes

✅ **.env files are already in .gitignore** - They won't be pushed to GitHub (secure)

✅ **All project files are committed** - Ready to push

✅ **After pushing**, you can deploy to:
- Railway (Backend)
- Vercel (Frontend)

---

## Need Help?

If you get authentication errors:
1. Use GitHub Personal Access Token instead of password
2. Or set up SSH keys for easier access

