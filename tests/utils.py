"""
Test Utilities - Shared helpers and functions for test integration
"""

import logging
import json
import time
from typing import Any, Dict, List, Optional, Callable
from functools import wraps
from datetime import datetime

# Configure logging for tests
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class TestLogger:
    """Test-specific logging utilities"""
    
    @staticmethod
    def log_test_start(test_name: str):
        """Log test start"""
        logger.info(f"🧪 Starting test: {test_name}")
    
    @staticmethod
    def log_test_end(test_name: str, status: str = "PASSED"):
        """Log test completion"""
        logger.info(f"✅ Test {test_name}: {status}")
    
    @staticmethod
    def log_error(message: str, error: Exception = None):
        """Log errors"""
        if error:
            logger.error(f"❌ {message}: {str(error)}")
        else:
            logger.error(f"❌ {message}")


class PerformanceTracker:
    """Track performance metrics"""
    
    def __init__(self):
        self.metrics: Dict[str, List[float]] = {}
    
    def record(self, metric_name: str, value: float):
        """Record a metric value"""
        if metric_name not in self.metrics:
            self.metrics[metric_name] = []
        self.metrics[metric_name].append(value)
    
    def get_stats(self, metric_name: str) -> Dict[str, float]:
        """Get statistics for a metric"""
        if metric_name not in self.metrics:
            return {}
        
        values = self.metrics[metric_name]
        return {
            "count": len(values),
            "min": min(values),
            "max": max(values),
            "avg": sum(values) / len(values),
        }


def time_it(func: Callable) -> Callable:
    """Decorator to measure function execution time"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        logger.info(f"⏱️  {func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper


def mock_ai_response(prompt: str) -> Dict[str, Any]:
    """Mock AI response for testing"""
    return {
        "status": "success",
        "timestamp": datetime.now().isoformat(),
        "prompt": prompt,
        "response": f"AI response to: {prompt}",
        "confidence": 0.95,
    }


def validate_json_structure(data: Any, schema: Dict) -> bool:
    """Validate data against schema"""
    try:
        if not isinstance(data, dict):
            return False
        for key, expected_type in schema.items():
            if key not in data:
                return False
            if not isinstance(data[key], expected_type):
                return False
        return True
    except Exception as e:
        logger.error(f"Schema validation failed: {e}")
        return False


class DataGenerator:
    """Generate test data"""
    
    @staticmethod
    def generate_user(user_id: int = 1) -> Dict[str, Any]:
        """Generate mock user data"""
        return {
            "id": user_id,
            "username": f"testuser_{user_id}",
            "email": f"test_{user_id}@example.com",
            "created_at": datetime.now().isoformat(),
        }
    
    @staticmethod
    def generate_ai_task(task_id: int = 1) -> Dict[str, Any]:
        """Generate mock AI task"""
        return {
            "id": task_id,
            "name": f"AI Task {task_id}",
            "status": "pending",
            "priority": "high",
            "created_at": datetime.now().isoformat(),
        }
    
    @staticmethod
    def generate_batch(count: int, generator: Callable) -> List[Dict[str, Any]]:
        """Generate multiple items"""
        return [generator(i) for i in range(count)]


# Export key components
__all__ = [
    "TestLogger",
    "PerformanceTracker",
    "time_it",
    "mock_ai_response",
    "validate_json_structure",
    "DataGenerator",
]
