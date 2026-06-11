from fastapi import FastAPI

from app.api.routes import health

app = FastAPI(
    title="Kaha API",
    description="Responsive sales, inventory, and profit tracker for sari-sari stores.",
    version="0.1.0"
)

@app.get("/")
def read_root():
    return{
        "message": "Welcome to Kaha API"
    }
    
app.include_router(health.router)