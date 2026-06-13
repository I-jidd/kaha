from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

ROOT_DIR = Path(__file__).resolve().parents[3] 


class Settings(BaseSettings):
    app_name: str = "Kaha API"
    
    database_url: str = (
        "postgresql+psycopg2://kaha_user:kaha_password@localhost:5433/kaha_db"
    )
    
    allowed_origins: list[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ]
    
    jwt_secret_key: str = "random-key"
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 60
    
    model_config = SettingsConfigDict(
        env_file=str(ROOT_DIR / ".env"),
        env_file_encoding="utf-8",
        extra="ignore"
    )

settings = Settings()