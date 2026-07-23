"""
Pytest Configuration - Centralized test configuration and setup
"""

import pytest
import sys
import os
from pathlib import Path

# Add project root to path
project_root = Path(__file__).parent.parent
sys.path.insert(0, str(project_root))

# Import fixtures
from tests.fixtures import *
from tests.utils import TestLogger, PerformanceTracker

# Initialize global test tracker
_performance_tracker = PerformanceTracker()


def pytest_configure(config):
    """Configure pytest"""
    config.addinivalue_line(
        "markers", "integration: mark test as integration test"
    )
    config.addinivalue_line(
        "markers", "unit: mark test as unit test"
    )
    config.addinivalue_line(
        "markers", "slow: mark test as slow running"
    )
    config.addinivalue_line(
        "markers", "ai_system: mark test as AI system test"
    )
    print("\n✅ Pytest configured for AP1-WEB-Console")


def pytest_collection_modifyitems(config, items):
    """Modify collected test items"""
    for item in items:
        # Auto-mark test location
        if "integration" in str(item.fspath):
            item.add_marker(pytest.mark.integration)
        elif "unit" in str(item.fspath):
            item.add_marker(pytest.mark.unit)


@pytest.fixture
def performance_tracker():
    """Fixture for performance tracking"""
    return _performance_tracker


@pytest.hookimpl(tryfirst=True, hookwrapper=True)
def pytest_runtest_makereport(item, call):
    """Generate test report"""
    outcome = yield
    rep = outcome.get_result()
    
    if rep.when == "call":
        if rep.passed:
            TestLogger.log_test_end(item.name, "PASSED ✅")
        elif rep.failed:
            TestLogger.log_test_end(item.name, "FAILED ❌")
        elif rep.skipped:
            TestLogger.log_test_end(item.name, "SKIPPED ⏭️")


class TestContext:
    """Context manager for test operations"""
    
    def __init__(self, test_name: str):
        self.test_name = test_name
    
    def __enter__(self):
        TestLogger.log_test_start(self.test_name)
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is None:
            TestLogger.log_test_end(self.test_name, "PASSED ✅")
        else:
            TestLogger.log_error(f"Test {self.test_name} failed", exc_val)


@pytest.fixture
def test_context():
    """Fixture for test context manager"""
    return TestContext


# Pytest options
def pytest_addoption(parser):
    """Add custom pytest options"""
    parser.addoption(
        "--run-slow",
        action="store_true",
        default=False,
        help="run slow tests"
    )
    parser.addoption(
        "--run-integration",
        action="store_true",
        default=False,
        help="run integration tests"
    )


def pytest_configure_collection(config):
    """Configure test collection"""
    if not config.getoption("--run-slow"):
        setattr(config.option, "marker_expr", "not slow")


__all__ = [
    "performance_tracker",
    "pytest_configure",
    "pytest_collection_modifyitems",
    "pytest_runtest_makereport",
    "pytest_addoption",
    "TestContext",
]
