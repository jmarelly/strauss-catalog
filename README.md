# Product Catalog Monorepo

A full-stack product catalog application with React frontend and Node.js/Express backend.

## Project Structure

```
product-catalog-monorepo/
├── client/                 # React frontend (Vite + TypeScript)
├── server/                 # Express backend (Node.js + TypeScript + SQLite)
├── collection.http         # HTTP requests for testing API
└── package.json           # Monorepo root package.json
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd product-catalog-monorepo
```

2. Install dependencies for both client and server:
```bash
npm run install:all
# or install separately:
# npm run client:install
# npm run server:install
```

3. Set up environment variables:
```bash
# Copy and configure server/.env
cp server/.env.example server/.env
```

4. Start the development servers:
```bash
# Start both client and server concurrently
npm run dev

# Or start individually:
# npm run server:dev  # Terminal 1
# npm run client:dev  # Terminal 2
```

## Available Scripts

### Root Level Scripts
- `npm run install:all` - Install dependencies for both client and server
- `npm run dev` - Start both development servers concurrently
- `npm run build` - Build both client and server for production

### Client Scripts (React)
- `npm run client:dev` - Start client development server
- `npm run client:build` - Build client for production
- `npm run client:start` - Preview production build

### Server Scripts (Express)
- `npm run server:dev` - Start server with hot reload
- `npm run server:build` - Build server for production
- `npm run server:start` - Start production server

## API Documentation

The API endpoints are documented in `collection.http`. You can use VS Code REST Client extension or similar tools to test the API.

### Key Endpoints
- `GET /api/v1/products` - Get all products (paginated)
- `POST /api/v1/products` - Create product (admin only)
- `POST /api/v1/auth/login` - User authentication
- `GET /api/v1/auth/me` - Get current user info

## Database

The application uses SQLite with Drizzle ORM for the database. Database files are gitignored.

### Database Commands
```bash
cd server
npm run db:generate  # Generate migrations
npm run db:push      # Push schema changes
npm run db:migrate   # Run migrations
npm run db:studio    # Open Drizzle Studio
```

## Technologies Used

### Frontend (Client)
- React 18 with TypeScript
- Vite for build tooling
- Material-UI (MUI) for components
- React Query for state management
- Styled Components for styling
- React Router for routing

### Backend (Server)
- Node.js with Express
- TypeScript
- SQLite with Drizzle ORM
- Zod for validation
- Pino for logging
- JWT for authentication
- bcrypt for password hashing

## Development Workflow

1. **Make changes** in client/ or server/ directories
2. **Test locally** with `npm run dev`
3. **Commit changes** to git
4. **Push to repository**

## Deployment

### Client Deployment
```bash
npm run client:build
# Deploy the client/dist/ folder to your hosting service
```

### Server Deployment
```bash
npm run server:build
# Deploy the server/dist/ folder to your server
```

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Create a pull request

## License

MIT License - see LICENSE file for details.
