# 🔧 Fix Hardcoded localhost URLs

## Problem

Many files have hardcoded `http://localhost:5000` URLs which don't work in production.

## Solution

Replace all hardcoded URLs with the `api` instance from `axios.js` or use environment variable.

---

## Files That Need Fixing:

1. AdminBlogs.jsx
2. AdminDashboard.jsx  
3. AdminEmails.jsx
4. Footer.jsx
5. AdminPayments.jsx
6. AdminQuotes.jsx
7. AdminPortfolio.jsx
8. AdminServices.jsx
9. AuthContext.jsx
10. AdminServicesAdd.jsx

---

## Quick Fix Pattern:

### ❌ Before:
```javascript
const response = await axios.get('http://localhost:5000/api/admin/blogs', config);
```

### ✅ After:
```javascript
import api from '../../api/axios'; // or '../api/axios'

const response = await api.get('/admin/blogs', config);
```

---

## Example Fixes:

### Fix 1: AdminBlogs.jsx

Replace:
```javascript
await axios.get('http://localhost:5000/api/admin/blogs', getConfig());
```

With:
```javascript
import api from '../../api/axios';

await api.get('/admin/blogs', getConfig());
```

### Fix 2: Footer.jsx

Replace:
```javascript
await axios.post('http://localhost:5000/api/newsletter/subscribe', { email });
```

With:
```javascript
import api from '../api/axios';

await api.post('/newsletter/subscribe', { email });
```

---

## Important Notes:

1. Use `api` instance from `axios.js` (already configured with environment variable)
2. Remove `http://localhost:5000/api` prefix
3. Just use the endpoint path like `/admin/blogs`
4. The `api` instance automatically adds the base URL from environment variable

---

**This fix is important but can be done after CORS is fixed!**

