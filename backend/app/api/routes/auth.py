from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.services.auth_service import register_user, authenticate_user
from app.models.user import User
from app.schemas.user import UserCreate, UserResponse
from app.schemas.auth import TokenResponse, LoginRequest
from app.core.security import create_access_token
from app.dependencies.auth import get_current_user

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

@router.post(
    "/login",
    response_model=TokenResponse,
    )
def login(login_data: LoginRequest, db: Session = Depends(get_db)):
    user = authenticate_user(
        db=db,
        email=login_data.email,
        password=login_data.password
    )
    
    access_token = create_access_token(data={"sub": str(user.id)})
    
    return TokenResponse(access_token=access_token)

@router.get("/me", response_model=UserResponse)
def read_current_user(current_user: User = Depends(get_current_user)):
    return current_user