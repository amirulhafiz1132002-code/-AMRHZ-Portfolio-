import httpx
import os
from typing import Dict, List, Optional
from datetime import datetime, timedelta
import logging

logger = logging.getLogger(__name__)

class GitHubService:
    def __init__(self):
        self.username = os.environ.get('GITHUB_USERNAME', 'amirulhafiz1132002-code')
        self.token = os.environ.get('GITHUB_TOKEN', '')
        self.base_url = 'https://api.github.com'
        self.cache = {}
        self.cache_duration = timedelta(minutes=5)
        
    def _get_headers(self) -> Dict[str, str]:
        headers = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'AMRHZ-Portfolio'
        }
        if self.token:
            headers['Authorization'] = f'token {self.token}'
        return headers
    
    def _is_cache_valid(self, key: str) -> bool:
        if key not in self.cache:
            return False
        cache_time = self.cache[key].get('timestamp')
        if not cache_time:
            return False
        return datetime.now() - cache_time < self.cache_duration
    
    def _get_from_cache(self, key: str) -> Optional[Dict]:
        if self._is_cache_valid(key):
            logger.info(f"Returning cached data for {key}")
            return self.cache[key].get('data')
        return None
    
    def _set_cache(self, key: str, data: Dict):
        self.cache[key] = {
            'data': data,
            'timestamp': datetime.now()
        }
    
    async def get_user(self) -> Dict:
        """Fetch GitHub user profile"""
        cache_key = f'user_{self.username}'
        cached = self._get_from_cache(cache_key)
        if cached:
            return cached
        
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(
                    f'{self.base_url}/users/{self.username}',
                    headers=self._get_headers(),
                    timeout=10.0
                )
                response.raise_for_status()
                data = response.json()
                
                user_data = {
                    'name': data.get('name', ''),
                    'username': data.get('login', ''),
                    'email': data.get('email', 'amirulhafiz1132002@gmail.com'),
                    'bio': data.get('bio', ''),
                    'avatar': data.get('avatar_url', ''),
                    'followers': data.get('followers', 0),
                    'following': data.get('following', 0),
                    'public_repos': data.get('public_repos', 0),
                    'html_url': data.get('html_url', '')
                }
                
                self._set_cache(cache_key, user_data)
                return user_data
                
        except Exception as e:
            logger.error(f"Error fetching user data: {str(e)}")
            raise
    
    def _classify_repository(self, repo: Dict) -> str:
        """Classify repository into categories"""
        name = repo.get('name', '').lower()
        description = (repo.get('description') or '').lower()
        
        # Core projects
        if any(keyword in name for keyword in ['amrhz', 'portfolio', 'ap1-core']):
            return 'core'
        if 'ap1' in name and 'core' not in name:
            return 'core'
        
        # Tools
        if any(keyword in name for keyword in ['rye', 'tool', 'cli', 'toolkit']):
            return 'tools'
        
        # Research
        if any(keyword in name or keyword in description for keyword in ['research', 'proto', 'zkp', 'neural']):
            return 'research'
        
        # Backend
        if any(keyword in name for keyword in ['server', 'backend', 'api', 'wedemy']):
            return 'backend'
        
        # Resources
        if any(keyword in name for keyword in ['awesome', 'docs', 'guide', 'starter']):
            return 'resources'
        
        return 'other'
    
    def _determine_status(self, repo: Dict) -> str:
        """Determine repository status based on activity"""
        updated_at = datetime.strptime(repo['updated_at'], '%Y-%m-%dT%H:%M:%SZ')
        days_since_update = (datetime.now() - updated_at).days
        
        description = (repo.get('description') or '').lower()
        
        # Check if archived
        if repo.get('archived', False):
            return 'complete'
        
        # Research projects
        if 'research' in description or 'proto' in description:
            return 'research'
        
        # Active if updated in last 60 days
        if days_since_update < 60:
            return 'active'
        
        # Complete if not updated in 180+ days
        if days_since_update > 180:
            return 'complete'
        
        return 'active'
    
    def _extract_tags(self, repo: Dict) -> List[str]:
        """Extract tags from topics and description"""
        tags = []
        
        # Get topics
        topics = repo.get('topics', [])
        tags.extend(topics[:4])  # Limit to 4 topics
        
        # Add language as tag
        if repo.get('language'):
            tags.append(repo['language'])
        
        # Extract from description
        description = (repo.get('description') or '').lower()
        keywords = ['ai', 'automation', 'api', 'dashboard', 'backend', 'frontend', 'cli', 'tool']
        for keyword in keywords:
            if keyword in description and keyword.title() not in tags:
                tags.append(keyword.title())
        
        return list(set(tags))[:5]  # Max 5 tags
    
    async def get_repositories(self, category: Optional[str] = None) -> List[Dict]:
        """Fetch all repositories with enhanced metadata"""
        cache_key = f'repos_{self.username}_{category or "all"}'
        cached = self._get_from_cache(cache_key)
        if cached:
            return cached
        
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(
                    f'{self.base_url}/users/{self.username}/repos',
                    headers=self._get_headers(),
                    params={'per_page': 100, 'sort': 'updated'},
                    timeout=10.0
                )
                response.raise_for_status()
                repos_data = response.json()
                
                repositories = []
                for repo in repos_data:
                    repo_category = self._classify_repository(repo)
                    
                    # Filter by category if specified
                    if category and category != 'all' and repo_category != category:
                        continue
                    
                    repository = {
                        'id': repo['id'],
                        'name': repo['name'],
                        'description': repo.get('description', 'No description available'),
                        'language': repo.get('language', 'Markdown'),
                        'stars': repo.get('stargazers_count', 0),
                        'forks': repo.get('forks_count', 0),
                        'url': repo['html_url'],
                        'status': self._determine_status(repo),
                        'category': repo_category,
                        'tags': self._extract_tags(repo),
                        'updated_at': repo['updated_at'],
                        'created_at': repo['created_at'],
                        'homepage': repo.get('homepage', '')
                    }
                    repositories.append(repository)
                
                self._set_cache(cache_key, repositories)
                return repositories
                
        except Exception as e:
            logger.error(f"Error fetching repositories: {str(e)}")
            raise
    
    async def get_stats(self) -> Dict:
        """Get aggregated statistics"""
        cache_key = f'stats_{self.username}'
        cached = self._get_from_cache(cache_key)
        if cached:
            return cached
        
        try:
            # Get user and repos data
            user_data = await self.get_user()
            repos_data = await self.get_repositories()
            
            # Calculate stats
            languages = list(set([repo['language'] for repo in repos_data if repo.get('language')]))
            active_repos = [repo for repo in repos_data if repo['status'] == 'active']
            total_stars = sum(repo['stars'] for repo in repos_data)
            total_forks = sum(repo['forks'] for repo in repos_data)
            
            # Top repositories by stars
            top_repos = sorted(repos_data, key=lambda x: x['stars'], reverse=True)[:5]
            
            stats = {
                'totalProjects': len(repos_data),
                'activeProjects': len(active_repos),
                'languages': languages,
                'focusAreas': ['AI', 'Automation', 'System Architecture'],
                'currentPhase': 'Foundation Building',
                'totalStars': total_stars,
                'totalForks': total_forks,
                'topRepositories': [{
                    'name': repo['name'],
                    'stars': repo['stars'],
                    'url': repo['url']
                } for repo in top_repos]
            }
            
            self._set_cache(cache_key, stats)
            return stats
            
        except Exception as e:
            logger.error(f"Error fetching stats: {str(e)}")
            raise

# Singleton instance
github_service = GitHubService()
