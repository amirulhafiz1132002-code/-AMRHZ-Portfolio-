from fastapi import APIRouter, HTTPException, Query
from typing import Optional
import logging
from services.github_service import github_service

logger = logging.getLogger(__name__)

router = APIRouter(prefix='/github', tags=['GitHub'])

@router.get('/user')
async def get_github_user():
    """
    Fetch GitHub user profile information
    """
    try:
        user_data = await github_service.get_user()
        return {'success': True, 'data': user_data}
    except Exception as e:
        logger.error(f"Error in get_github_user: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch GitHub user data: {str(e)}"
        )

@router.get('/repositories')
async def get_github_repositories(
    category: Optional[str] = Query(None, description="Filter by category: core, tools, research, backend, resources")
):
    """
    Fetch all GitHub repositories with enhanced metadata
    """
    try:
        repositories = await github_service.get_repositories(category)
        return {
            'success': True,
            'data': repositories,
            'count': len(repositories)
        }
    except Exception as e:
        logger.error(f"Error in get_github_repositories: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch GitHub repositories: {str(e)}"
        )

@router.get('/stats')
async def get_github_stats():
    """
    Get aggregated GitHub statistics
    """
    try:
        stats = await github_service.get_stats()
        return {'success': True, 'data': stats}
    except Exception as e:
        logger.error(f"Error in get_github_stats: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch GitHub stats: {str(e)}"
        )

@router.get('/health')
async def github_health_check():
    """
    Check if GitHub API is accessible
    """
    try:
        await github_service.get_user()
        return {'success': True, 'message': 'GitHub API is accessible'}
    except Exception as e:
        logger.error(f"Error in github_health_check: {str(e)}")
        return {
            'success': False,
            'message': 'GitHub API is not accessible'
        }
