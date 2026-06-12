from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import health, auth
from app.core.config import settings

app = FastAPI(
    title="Kaha API",
    description="Responsive sales, inventory, and profit tracker for sari-sari stores.",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins = settings.allowed_origins,
    allow_credentials =True,
    allow_methods =["*"],
    allow_headers =["*"]
)

@app.get("/")
def read_root():
    return{
        "message": "Welcome to Kaha API"
    }
    
app.include_router(health.router)
app.include_router(auth.router)