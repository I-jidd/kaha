from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text

from app.db.database import get_db

router = APIRouter(prefix="/api/health", tags=["Health"])

@router.get("")
def check_health():
    return{
        "status": "ok",
        "message": "kaha backend is running"
    }

@router.get("/db")
def check_database_health(db:Session = Depends(get_db)):
    db.execute(text("SELECT 1"))
    
    return {
        "status": "ok",
        "message": "Database connection successful"
    }