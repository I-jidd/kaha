from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.security import hash_password, verify_password
from app.models.user import User
from app.schemas.user import UserCreate

def get_user_by_email(db: Session, email:str) -> User | None:
    normalized_email = email.strip().lower()
    
    statement = select(User).where(User.email == normalized_email)
    return db.execute(statement).scalar_one_or_none()

def register_user(db: Session, user_data: UserCreate) -> User:
    normalized_email = user_data.email.strip().lower()
    
    existing_user = get_user_by_email(db, normalized_email)
    
    if existing_user:
        raise HTTPException(
            status_code= status.HTTP_400_BAD_REQUEST,
            detail="Email is already registered"
        )
    
    new_user = User(
        email = normalized_email,
        hashed_password = hash_password(user_data.password)
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return new_user

def authenticate_user(db: Session, email:str, password: str) -> User:
    user = db.query(User).filter(User.email == email).first()
    
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
            headers={"WWW-Authenticate": "Bearer"}
        )
    
    return user
    