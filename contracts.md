# API Contracts & Integration Plan

## Overview
This document outlines the backend API implementation for GitHub integration and how it replaces the mock data currently used in the frontend.

## Current Mock Data (mock.js)

### 1. User Data
```javascript
mockGitHubData.user = {
  name, username, email, bio, avatar, followers, following, public_repos
}
```

### 2. Repositories Data
```javascript
mockGitHubData.repositories = [
  { id, name, description, language, stars, forks, url, status, category, achievement, progress, tags }
]
```

### 3. Stats Data
```javascript
mockGitHubData.stats = {
  totalProjects, activeProjects, languages, focusAreas, currentPhase
}
```

---

## Backend API Endpoints

### 1. GET /api/github/user
**Purpose:** Fetch GitHub user profile information

**Response:**
```json
{
  "name": "Muhammad Amirul Hafiz",
  "username": "amirulhafiz1132002-code",
  "email": "amirulhafiz1132002@gmail.com",
  "bio": "Building AI-powered systems",
  "avatar": "https://avatars.githubusercontent.com/...",
  "followers": 45,
  "following": 32,
  "public_repos": 25
}
```

**GitHub API Used:** `https://api.github.com/users/{username}`

---

### 2. GET /api/github/repositories
**Purpose:** Fetch all repositories with enhanced metadata

**Query Parameters:**
- `category` (optional): Filter by category (core, tools, research, backend, resources)

**Response:**
```json
{
  "repositories": [
    {
      "id": 123456,
      "name": "AMRHZ-Portfolio",
      "description": "...",
      "language": "TypeScript",
      "stars": 12,
      "forks": 3,
      "url": "https://github.com/...",
      "status": "active",
      "category": "core",
      "tags": ["AI", "Portfolio"],
      "updated_at": "2026-06-01T00:00:00Z",
      "created_at": "2025-01-01T00:00:00Z"
    }
  ]
}
```

**GitHub API Used:** `https://api.github.com/users/{username}/repos`

**Note:** Backend will enrich GitHub data with:
- Category classification (based on repo name/description)
- Status (active/complete/research)
- Tags (extracted from topics/description)

---

### 3. GET /api/github/stats
**Purpose:** Get aggregated statistics

**Response:**
```json
{
  "totalProjects": 25,
  "activeProjects": 3,
  "languages": ["TypeScript", "JavaScript", "Python", ...],
  "topRepositories": [...],
  "totalStars": 100,
  "totalForks": 20
}
```

**Computed from:** Aggregation of repositories data

---

## Backend Implementation Details

### File Structure
```
/app/backend/
├── server.py (main FastAPI app)
├── services/
│   └── github_service.py (GitHub API integration)
├── routes/
│   └── github_routes.py (API endpoints)
├── utils/
│   └── cache.py (Simple caching to avoid rate limits)
└── config.py (Configuration)
```

### Dependencies to Add
- `httpx` or `requests` - HTTP client for GitHub API
- `python-dotenv` - Already installed

### Environment Variables (.env)
```
GITHUB_USERNAME=amirulhafiz1132002-code
GITHUB_TOKEN=ghp_xxxx (optional, for higher rate limits)
```

### Rate Limiting Strategy
- Cache responses for 5 minutes
- Use GitHub token if provided (5000 req/hour vs 60 req/hour)
- Return cached data if GitHub API fails

### Error Handling
- Graceful fallback to cached data
- User-friendly error messages
- Log errors for debugging

---

## Frontend Integration Changes

### 1. Create API Service (`/app/frontend/src/services/api.js`)
```javascript
import axios from 'axios';

const API_BASE = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const githubAPI = {
  getUser: () => axios.get(`${API_BASE}/github/user`),
  getRepositories: (category) => axios.get(`${API_BASE}/github/repositories`, { params: { category } }),
  getStats: () => axios.get(`${API_BASE}/github/stats`)
};
```

### 2. Update Portfolio.jsx
- Replace `import { mockGitHubData } from '../mock'` with API calls
- Add `useEffect` hooks to fetch data on mount
- Add loading states during API calls
- Handle errors with toast notifications

### 3. Add Loading States
- Show skeleton loaders while fetching data
- Use shadcn Skeleton component

### 4. Error Handling
- Use sonner toast for error notifications
- Show fallback UI if API fails
- Retry mechanism for failed requests

---

## Category Mapping Logic (Backend)

The backend will classify repositories into categories based on:

```python
def classify_repository(repo):
    name = repo['name'].lower()
    description = (repo['description'] or '').lower()
    
    # Core projects
    if any(keyword in name for keyword in ['amrhz', 'ap1-core', 'ap1']):
        return 'core'
    
    # Tools
    if any(keyword in name for keyword in ['rye', 'tool', 'cli']):
        return 'tools'
    
    # Research
    if any(keyword in description for keyword in ['research', 'proto', 'zkp']):
        return 'research'
    
    # Backend
    if any(keyword in name for keyword in ['server', 'backend', 'api']):
        return 'backend'
    
    # Resources
    if any(keyword in name for keyword in ['awesome', 'docs', 'guide']):
        return 'resources'
    
    return 'other'
```

---

## Testing Strategy

### Backend Testing
1. Test GitHub API integration with real API
2. Test caching mechanism
3. Test error handling
4. Test rate limiting

### Frontend Testing
1. Test API calls and data rendering
2. Test loading states
3. Test error states
4. Test filtering with real data

---

## Migration Steps

1. ✅ Create contracts.md (this file)
2. ✅ Implement backend GitHub service
3. ✅ Create API routes
4. ✅ Add caching mechanism
5. ✅ Create frontend API service
6. ✅ Update Portfolio.jsx with API calls
7. ✅ Add loading and error states
8. ✅ Test integration end-to-end
9. ✅ Remove mock.js dependency (kept as fallback reference)

---

## Notes

- GitHub API rate limit: 60 requests/hour (unauthenticated), 5000/hour (authenticated)
- Caching is essential to avoid hitting rate limits
- Mock data can be kept as fallback for development
- Consider adding WebSocket for real-time updates in future
