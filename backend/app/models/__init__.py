"""
SQLAlchemy model registry.

Future model files should be imported here so Alembic can detect them during
autogeneration.
"""

from app.models.user import User

__all__ = ["User"]