# Product Catalog - Backend

Node.js/Express backend API for the Product Catalog application.

## Tech Stack

- **Node.js** with Express framework
- **TypeScript** for type safety
- **SQLite** with Drizzle ORM for database
- **JWT** for authentication
- **bcrypt** for password hashing
- **Zod** for API validation
- **Pino** for logging

## Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run start:dev

# Build for production
npm run build

# Start production server
npm run start:prod
```

## Database

### SQLite with Drizzle ORM
- **Automatic setup**: Database is created and seeded on first run
- **Migrations**: Schema changes are handled automatically
- **Seed data**: Admin user and sample products/categories are created

### Database Commands
```bash
# Generate migrations
npm run db:generate

# Push schema changes
npm run db:push

# Open Drizzle Studio (GUI)
npm run db:studio
```

## API Endpoints

### Authentication
```http
POST /api/v1/auth/login     # User login
GET  /api/v1/auth/me        # Get current user (requires auth)
POST /api/v1/auth/logout    # User logout
```

### Products
```http
GET    /api/v1/products                           # Get paginated products
GET    /api/v1/products?search=term&page=1        # Search products
POST   /api/v1/products                           # Create product (admin only)
PUT    /api/v1/products/:id                       # Update product (admin only)
DELETE /api/v1/products/:id                       # Delete product (admin only)
POST   /api/v1/products/bulk-price-update         # Bulk price update (admin only)
```

### Categories
```http
GET /api/v1/categories # Get all categories
```

## Key Features

### Authentication & Security
- **JWT tokens** for session management
- **Password hashing** with bcrypt
- **Rate limiting** to prevent abuse
- **CORS** configuration for frontend access

### Data Validation
- **Zod schemas** for request validation
- **Type-safe** API responses
- **Comprehensive error handling**

### Database Features
- **Relational data** with categories and products
- **Soft deletes** for data integrity
- **Automatic timestamps** (created_at, updated_at)
- **Indexing** for performance

### Logging
- **Structured logging** with Pino
- **Request/response logging**
- **Error tracking** with context

## Project Structure

```
server/
├── src/
│   ├── api/                 # API routes and controllers
│   │   ├── auth/           # Authentication endpoints
│   │   ├── products/       # Product CRUD operations
│   │   └── categories/     # Category operations
│   ├── config/             # Configuration files
│   ├── database/           # Database setup and connections
│   ├── middlewares/        # Express middlewares
│   ├── shared/             # Shared utilities and schemas
│   ├── utils/              # Helper functions
│   └── index.ts            # Application entry point
├── scripts/                # Database seeding scripts
├── drizzle.config.ts       # Drizzle ORM configuration
└── package.json
```

## Environment Configuration

The `.env` file contains all necessary environment variables for development. Key settings include:

- **JWT_SECRET**: Secret key for JWT token signing
- **PORT**: Server port (default: 3000)
- **NODE_ENV**: Environment mode (development/production)

## Seed Data

The application automatically seeds the database with:
- **Admin user**: username: `admin`, password: `admin123`
- **Product categories**: Electronics, clothing, books, etc.
- **Sample products**: Various products across categories

## Error Handling

- **Global error handler** catches all unhandled errors
- **Zod validation errors** return detailed field-level errors
- **Authentication errors** handled gracefully
- **Database errors** logged with context
- **API responses** include consistent error formats

## Security Features

- **Helmet** for security headers
- **Rate limiting** on authentication endpoints
- **CORS** configuration for cross-origin requests
- **Input validation** prevents malicious data
- **SQL injection prevention** via Drizzle ORM
