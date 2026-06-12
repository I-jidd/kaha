from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.services.auth_service import register_user
from app.schemas.user import UserCreate, UserResponse

router = APIRouter(prefix="/api/auth", tags=["Auth"])

@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED
)
def register(
    user_data: UserCreate,
    db: Session = Depends(get_db)
    ):
    return register_user(db=db, user_data=user_data)