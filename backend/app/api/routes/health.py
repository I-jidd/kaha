from fastapi import APIRouter

router = APIRouter(prefix="/api/health", tags=["Health"])

@router.get("")
def check_health():
    return{
        "status": "ok",
        "message": "kaha backend is running"
    }