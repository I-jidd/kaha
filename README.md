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
- SQLAlchemy later
- Alembic later
- PostgreSQL later
- Pydantic
- JWT authentication later
- Service-layer architecture

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
Phase 1.7 - Project documentation updated
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
        config.py
      main.py
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
    package.json
    vite.config.js

  .gitignore
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

Use two terminals.

### Terminal 1: Backend

```powershell
Set-Location backend
.\venv\Scripts\Activate.ps1
uvicorn app.main:app --reload
```

### Terminal 2: Frontend

```powershell
Set-Location frontend
npm run dev
```

Then open:

```txt
http://localhost:5173
```

---

## Current Routes

Frontend routes:

```txt
/          Dashboard
/sell      Sell / POS
/products  Products
/reports   Reports
/more      More
```

Backend routes:

```txt
GET /               Root API message
GET /api/health     Backend health check
GET /docs           Swagger API documentation
```

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
```

---

## Environment Variables

Do not commit real `.env` files.

Safe files:

```txt
.env.example
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

Future backend environment variables:

```env
DATABASE_URL=
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

## Expected Portfolio Description

Built Kaha, a responsive sales and inventory tracking platform for sari-sari stores using React, FastAPI, PostgreSQL, and JWT authentication. Implemented product inventory management, responsive POS sales recording, automatic stock deduction, profit calculation, restock tracking, stock movement logs, and analytics dashboards. Designed the system to work across mobile, tablet, laptop, and desktop devices while collecting clean transaction data for future demand forecasting, restock prediction, savings goal tracking, and OCR-assisted receipt intake features.
