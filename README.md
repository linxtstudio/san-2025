# SAN-2025 Project

## Project Structure

```
san-2025/
├── backend/        # Backend application folder
│   ├── routes/
│   ├── controllers/
│   └── ...
├── frontend/       # Frontend application folder
│   ├── src/
│   ├── public/
│   └── ...
└── ...
```

## Getting Started

### Backend Setup

Navigate to backend directory:

```bash
cd backend
pnpm install
pnpm run dev
```

### Frontend Setup

Navigate to frontend directory:

```bash
cd frontend
pnpm install
pnpm run dev
```

## Development

- Backend runs on: `http://localhost:3000`
- Frontend runs on: `http://localhost:5173`

## Deployment

1. Ensure all tests pass and changes are committed to main branch
2. Create a new production tag:

```bash
git tag production-v-1.0.0  # Update version number as needed
git push origin production-v-1.0.0
```

3. CI/CD will automatically:
   - Run tests
   - Build applications
   - Deploy to production if all checks pass

Note: Production tags must follow the format `production-*` with semantic versioning practice (e.g., production-v-1.0.0). Learn more here https://semver.org/
