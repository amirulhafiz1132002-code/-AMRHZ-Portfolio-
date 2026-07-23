"""
Test Fixtures - Reusable test data and setup for seamless integration
"""

import pytest
from typing import Dict, Any, Generator
from datetime import datetime
from tests.utils import DataGenerator, mock_ai_response


class AISystemFixtures:
    """Fixtures for AI system testing"""
    
    @staticmethod
    def sample_user() -> Dict[str, Any]:
        """Sample user data"""
        return {
            "id": 1,
            "username": "testuser",
            "email": "test@example.com",
            "role": "admin",
            "created_at": datetime.now().isoformat(),
        }
    
    @staticmethod
    def sample_ai_config() -> Dict[str, Any]:
        """Sample AI configuration"""
        return {
            "model": "gpt-4",
            "api_key": "test_key_123",
            "max_tokens": 2000,
            "temperature": 0.7,
            "timeout": 30,
            "retry_attempts": 3,
        }
    
    @staticmethod
    def sample_prompt() -> str:
        """Sample AI prompt"""
        return "Explain the concept of machine learning in simple terms"
    
    @staticmethod
    def sample_analytics_data() -> Dict[str, Any]:
        """Sample analytics data"""
        return {
            "session_id": "sess_12345",
            "user_id": 1,
            "event_type": "ai_request",
            "timestamp": datetime.now().isoformat(),
            "response_time_ms": 245,
            "tokens_used": 156,
            "success": True,
        }


@pytest.fixture
def ai_system_config() -> Dict[str, Any]:
    """Fixture for AI system configuration"""
    return AISystemFixtures.sample_ai_config()


@pytest.fixture
def mock_user() -> Dict[str, Any]:
    """Fixture for mock user"""
    return AISystemFixtures.sample_user()


@pytest.fixture
def sample_prompt() -> str:
    """Fixture for sample prompt"""
    return AISystemFixtures.sample_prompt()


@pytest.fixture
def analytics_data() -> Dict[str, Any]:
    """Fixture for analytics data"""
    return AISystemFixtures.sample_analytics_data()


@pytest.fixture
def test_data_generator() -> DataGenerator:
    """Fixture for data generator"""
    return DataGenerator()


@pytest.fixture
def mock_ai_responses() -> Dict[str, Any]:
    """Fixture for multiple mock AI responses"""
    return {
        "simple": mock_ai_response("What is AI?"),
        "complex": mock_ai_response("Explain transformer architecture"),
        "code": mock_ai_response("Write a Python function"),
    }


@pytest.fixture(scope="session")
def test_session_setup():
    """Setup for entire test session"""
    print("\n🚀 Starting test session for AP1-WEB-Console")
    yield
    print("\n✅ Test session completed")


@pytest.fixture(scope="function", autouse=True)
def test_function_setup():
    """Setup for each test function"""
    yield
    # Cleanup if needed


class MockBackendClient:
    """Mock backend client for testing"""
    
    def __init__(self, config: Dict[str, Any] = None):
        self.config = config or AISystemFixtures.sample_ai_config()
        self.requests_log = []
    
    def send_request(self, prompt: str) -> Dict[str, Any]:
        """Mock sending request to backend"""
        response = mock_ai_response(prompt)
        self.requests_log.append({"prompt": prompt, "response": response})
        return response
    
    def get_request_log(self):
        """Get log of all requests"""
        return self.requests_log
    
    def clear_log(self):
        """Clear request log"""
        self.requests_log = []


class MockFrontendClient:
    """Mock frontend client for testing"""
    
    def __init__(self):
        self.render_log = []
    
    def render_component(self, component_name: str, props: Dict[str, Any]):
        """Mock rendering component"""
        self.render_log.append({"component": component_name, "props": props})
    
    def get_render_log(self):
        """Get log of all renders"""
        return self.render_log


@pytest.fixture
def backend_client() -> MockBackendClient:
    """Fixture for mock backend client"""
    return MockBackendClient()


@pytest.fixture
def frontend_client() -> MockFrontendClient:
    """Fixture for mock frontend client"""
    return MockFrontendClient()


@pytest.fixture
def integration_setup(backend_client, frontend_client, mock_user):
    """Fixture for integration testing setup"""
    return {
        "backend": backend_client,
        "frontend": frontend_client,
        "user": mock_user,
    }


__all__ = [
    "AISystemFixtures",
    "ai_system_config",
    "mock_user",
    "sample_prompt",
    "analytics_data",
    "test_data_generator",
    "mock_ai_responses",
    "test_session_setup",
    "test_function_setup",
    "MockBackendClient",
    "MockFrontendClient",
    "backend_client",
    "frontend_client",
    "integration_setup",
]
