# Kaha

**Kaha** is a responsive sales, inventory, and profit tracker for sari-sari stores.

The goal of this project is to help small store owners record daily sales, manage product inventory, monitor low-stock items, track profit, record restocks, and collect clean transaction data for future analytics and machine learning features.

Kaha is designed to work well on:

- Mobile phones
- Tablets
- Laptops
- Desktop monitors

The app is **mobile-first**, but not mobile-only.

---

## Tech Stack

### Frontend

- React + Vite
- Tailwind CSS
- React Router
- Axios
- lucide-react
- TanStack Query later
- Recharts later

### Backend

- FastAPI
- SQLAlchemy
- Alembic
- PostgreSQL
- Pydantic
- JWT authentication later
- Service-layer architecture

### Database

- PostgreSQL
- Docker Compose
- SQLAlchemy ORM
- Alembic migrations

### Deployment Plan

- Docker
- Docker Compose
- Render or similar backend hosting
- Vercel or Render Static Site for frontend
- Neon PostgreSQL or Render PostgreSQL for database

---

## Core MVP Features

- User authentication
- Store setup
- Product inventory management
- POS sales recording
- Automatic stock deduction
- Profit calculation
- Manual restocking
- Stock movement logging
- Dashboard analytics
- Sales and profit reports
- Responsive mobile-first interface

---

## Future Features

These will be added only after the MVP is stable:

- Email verification after basic authentication
- Savings goals / Alkansya
- Receipt scanner for restock entry
- OCR-assisted product matching
- Rule-based business insights
- Demand forecasting
- Restock recommendations

---

## Current Project Status

```txt
Phase 2.6 - Database and migration documentation updated
```

Completed foundation steps:

```txt
Phase 1.1 - Initialized project repository
Phase 1.2 - Added FastAPI backend health check
Phase 1.3 - Set up React + Vite frontend
Phase 1.4 - Added Tailwind CSS styling
Phase 1.5 - Connected frontend to backend health check
Phase 1.6 - Added responsive app shell navigation
Phase 1.7 - Updated README setup documentation

Phase 2.1 - Added PostgreSQL Docker Compose setup
Phase 2.2 - Added SQLAlchemy database connection
Phase 2.3 - Set up Alembic migration environment
Phase 2.4 - Added initial database migration baseline
Phase 2.5 - Prepared SQLAlchemy model registry
Phase 2.6 - Updated database and migration documentation
```

---

## Project Structure

```txt
kaha/
  backend/
    app/
      api/
        routes/
          health.py
      core/
        __init__.py
        config.py
      db/
        __init__.py
        database.py
      models/
        __init__.py
      main.py
    alembic/
      versions/
      env.py
      script.py.mako
    alembic.ini
    requirements.txt

  frontend/
    src/
      api/
        axios.js
      components/
        layout/
          AppLayout.jsx
          BottomNav.jsx
          Header.jsx
          Sidebar.jsx
      pages/
        HomePage.jsx
        SellPage.jsx
        ProductsPage.jsx
        ReportsPage.jsx
        MorePage.jsx
      App.jsx
      index.css
      main.jsx
    .env.example
    package.json
    package-lock.json
    vite.config.js

  .env.example
  .gitignore
  docker-compose.yml
  README.md
```

---

## Backend Setup

Open PowerShell from the project root:

```powershell
Set-Location backend
.\venv\Scripts\Activate.ps1
uvicorn app.main:app --reload
```

Backend runs at:

```txt
http://127.0.0.1:8000
```

Root endpoint:

```txt
http://127.0.0.1:8000/
```

Expected response:

```json
{
  "message": "Welcome to Kaha API"
}
```

Health check endpoint:

```txt
http://127.0.0.1:8000/api/health
```

Expected response:

```json
{
  "status": "ok",
  "message": "Kaha backend is running"
}
```

Database health check endpoint:

```txt
http://127.0.0.1:8000/api/health/db
```

Expected response:

```json
{
  "status": "ok",
  "message": "Database connection successful"
}
```

API docs:

```txt
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

Open another PowerShell terminal from the project root:

```powershell
Set-Location frontend
npm install
npm run dev
```

Frontend runs at:

```txt
http://localhost:5173
```

The frontend should show:

```txt
Kaha dashboard shell
Responsive navigation
Backend health status
Placeholder pages for Sell, Products, Reports, and More
```

---

## Running the Full Foundation App

Use three terminals.

### Terminal 1: Database

```powershell
docker compose up -d db
```

### Terminal 2: Backend

```powershell
Set-Location backend
.\venv\Scripts\Activate.ps1
uvicorn app.main:app --reload
```

### Terminal 3: Frontend

```powershell
Set-Location frontend
npm run dev
```

Then open:

```txt
http://localhost:5173
```

---

## Current Frontend Routes

```txt
/          Dashboard
/sell      Sell / POS
/products  Products
/reports   Reports
/more      More
```

---

## Current Backend Routes

```txt
GET /               Root API message
GET /api/health     Backend health check
GET /api/health/db  Database connection health check
GET /docs           Swagger API documentation
```

---

## Database Setup

Kaha uses PostgreSQL through Docker Compose.

Start the database from the project root:

```powershell
docker compose up -d db
```

Check if the database container is running:

```powershell
docker ps
```

Expected container:

```txt
kaha_postgres
```

Expected port mapping:

```txt
0.0.0.0:5433->5432/tcp
```

The local PostgreSQL connection uses:

```txt
Database: kaha_db
User: kaha_user
Port: 5433
```

The development database URL is:

```env
DATABASE_URL=postgresql+psycopg2://kaha_user:kaha_password@localhost:5433/kaha_db
```

This value is documented in `.env.example`.

Do not commit real `.env` files.

---

## Testing PostgreSQL Directly

From the project root, run:

```powershell
docker exec -it kaha_postgres psql -U kaha_user -d kaha_db
```

Inside `psql`, check the current database:

```sql
SELECT current_database();
```

Expected:

```txt
kaha_db
```

Check the current user:

```sql
SELECT current_user;
```

Expected:

```txt
kaha_user
```

Show tables:

```sql
\dt
```

At this stage, the only expected table is usually:

```txt
alembic_version
```

Exit `psql`:

```sql
\q
```

---

## Database Health Check

After starting PostgreSQL, run the backend:

```powershell
Set-Location backend
.\venv\Scripts\Activate.ps1
uvicorn app.main:app --reload
```

Open:

```txt
http://127.0.0.1:8000/api/health/db
```

Expected response:

```json
{
  "status": "ok",
  "message": "Database connection successful"
}
```

This confirms that FastAPI can connect to PostgreSQL through SQLAlchemy.

---

## Alembic Migration Workflow

Alembic is used to manage database schema changes.

Run Alembic commands from the backend folder:

```powershell
Set-Location backend
.\venv\Scripts\Activate.ps1
```

Check the current migration:

```powershell
alembic current
```

Check migration history:

```powershell
alembic history
```

Apply all migrations:

```powershell
alembic upgrade head
```

Create a normal empty migration:

```powershell
alembic revision -m "migration message"
```

Create an autogenerated migration after adding a SQLAlchemy model:

```powershell
alembic revision --autogenerate -m "create users table"
```

Important migration flow:

```txt
Create or update SQLAlchemy model
↓
Import model in app/models/__init__.py
↓
Run alembic revision --autogenerate
↓
Review generated migration file
↓
Run alembic upgrade head
↓
Test the database
↓
Commit the model and migration together
```

Do not manually create tables in PostgreSQL unless debugging.

---

## Current Database Foundation

The backend currently has:

```txt
backend/app/db/database.py
backend/app/models/__init__.py
backend/alembic/
backend/alembic.ini
```

Current database features:

```txt
PostgreSQL Docker container
SQLAlchemy engine
SQLAlchemy session factory
get_db dependency
Base model class
Alembic migration environment
Initial baseline migration
Model registry for future autogeneration
Database health check endpoint
```

No business tables exist yet.

Not created yet:

```txt
users
stores
products
sales
sale_items
restocks
stock_movements
```

The first real table will be created in Phase 3 when authentication begins.

---

## Responsive Design Direction

Kaha uses a calm and practical sari-sari store interface.

Color palette:

```txt
Background:      #FAF7F0
Surface/Card:    #FFFFFF
Primary Green:   #2F6F4E
Primary Dark:    #24543B
Accent:          #D99A3D
Text:            #1F2933
Muted Text:      #6B7280
Border:          #E5E0D8
Danger:          #B42318
Warning:         #B7791F
Success:         #2F6F4E
```

Responsive rules:

```txt
Mobile: bottom navigation
Desktop: sidebar navigation
Mobile pages: cards first
Desktop pages: wider grids and panels
POS screen: optimized for fast selling
```

---

## Development Rules

This project is built step by step.

Important rules:

- Do not commit broken code.
- Do not commit `.env`.
- Do not commit `node_modules`.
- Do not commit `venv`.
- Do not commit `__pycache__`.
- Do not commit generated secrets.
- Use small, professional Git commits.
- Test before committing.
- Keep backend and frontend separated.
- Keep route files thin.
- Put business logic in service files later.
- Use Alembic migrations for database schema changes.
- Do not manually create app tables in PostgreSQL.
- Do not add future features before the MVP foundation is stable.

---

## Git Workflow

Before every commit:

```powershell
git status
```

Then:

```powershell
git add .
git commit -m "clear professional commit message"
```

Commit message examples:

```txt
chore: initialize Kaha project repository
feat: add FastAPI backend health check
feat: setup React Vite frontend
feat: add Tailwind CSS frontend styling
feat: connect frontend to backend health check
feat: add responsive app shell navigation
docs: update project setup instructions
chore: add PostgreSQL Docker Compose setup
feat: add backend database connection
chore: setup Alembic migrations
chore: add initial database migration baseline
chore: prepare SQLAlchemy model registry
docs: update database setup instructions
```

---

## Environment Variables

Do not commit real `.env` files.

Safe files:

```txt
.env.example
frontend/.env.example
```

Unsafe files:

```txt
.env
.env.local
.env.production
```

Frontend environment example:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

Backend environment example:

```env
DATABASE_URL=postgresql+psycopg2://kaha_user:kaha_password@localhost:5433/kaha_db
JWT_SECRET_KEY=
JWT_ALGORITHM=
ACCESS_TOKEN_EXPIRE_MINUTES=
FRONTEND_ORIGIN=
```

Future email verification environment variables:

```env
EMAIL_PROVIDER=
EMAIL_FROM=
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_USE_TLS=
```

Never commit real email credentials.

---

## Authentication Plan

Authentication will start in Phase 3.

Planned basic authentication steps:

```txt
Phase 3.1 - Add User model
Phase 3.2 - Add User schemas
Phase 3.3 - Add password hashing utilities
Phase 3.4 - Add register endpoint
Phase 3.5 - Add login endpoint and JWT generation
Phase 3.6 - Add current user dependency and /api/auth/me
Phase 3.7 - Add email verification
```

Authentication features planned for the MVP:

```txt
Register
Login
JWT token authentication
Protected backend endpoints
Protected frontend routes
Current user profile endpoint
```

---

## Email Verification Plan

Email verification will be added later inside the authentication phase.

It should not be implemented before:

```txt
User model
Password hashing
Register endpoint
Login endpoint
JWT token generation
Protected backend dependency
/api/auth/me
Login/Register frontend pages
Protected frontend routes
```

Planned future step:

```txt
Phase 3.7 - Add email verification
```

Planned email verification flow:

```txt
User registers
Backend creates user with is_verified = false
Backend generates verification token
Backend sends verification email
User clicks verification link
Frontend sends token to backend
Backend verifies token
User becomes verified
User can access protected business features
```

Future email verification tables:

```txt
users
- id
- email
- hashed_password
- is_active
- is_verified
- created_at
- updated_at

email_verification_tokens
- id
- user_id
- token
- expires_at
- used_at
- created_at
```

Future email verification endpoints:

```txt
POST /api/auth/verify-email
POST /api/auth/resend-verification
```

Future email verification pages:

```txt
CheckEmailPage.jsx
VerifyEmailPage.jsx
```

Important email verification rules:

- New users should be created with `is_verified = false`.
- Verification tokens must expire.
- Used tokens must not be reusable.
- Important app features should be blocked until the user is verified.
- Do not expose backend secrets to the frontend.
- Do not commit email provider credentials.
- Start simple with console email logging before using a real provider.

---

## MVP First, AI Later

Kaha will collect clean sales and inventory data first.

Future AI/ML features may include:

- Sales forecasting
- Restock recommendations
- Slow-moving product detection
- Promo suggestions
- Receipt scanner improvement
- Savings recommendations

These will only be added after the core MVP is stable.

---

## Future Savings Goals / Alkansya

This will be added after the core sales, dashboard, and reports features are stable.

Possible features:

- Create savings goal
- Edit savings goal
- Archive completed goal
- Add manual savings contribution
- Allocate part of daily profit
- View savings progress
- Show savings history

Important rule:

```txt
The system should not automatically deduct or allocate savings without user confirmation.
```

---

## Future Receipt Scanner

This will be added after manual restocking is stable.

Possible flow:

```txt
User captures receipt image
↓
System extracts possible restock items
↓
User reviews and corrects extracted items
↓
User confirms restock draft
↓
System updates inventory
↓
System logs stock movements
```

Important rule:

```txt
Never update inventory automatically from OCR output without user confirmation.
```

---

## Expected Portfolio Description

Built Kaha, a responsive sales and inventory tracking platform for sari-sari stores using React, FastAPI, PostgreSQL, and JWT authentication. Implemented product inventory management, responsive POS sales recording, automatic stock deduction, profit calculation, restock tracking, stock movement logs, and analytics dashboards. Designed the system to work across mobile, tablet, laptop, and desktop devices while collecting clean transaction data for future demand forecasting, restock prediction, savings goal tracking, and OCR-assisted receipt intake features.
