# A-Z Organic Store - E-commerce Platform

## Overview

This is a full-stack e-commerce platform for organic products built with React, Express, TypeScript, and PostgreSQL. The application follows a modern web architecture with a React frontend, Express.js backend, and uses Drizzle ORM for database management. The platform is designed to sell organic beauty, grocery, food, and wellness products.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Runtime**: Node.js with ESM modules
- **Session Management**: PostgreSQL session store (connect-pg-simple)

### Key Components

#### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` - centralized schema definitions
- **Migration Strategy**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless connection

#### Authentication System
- Basic user authentication structure with username/password
- Session-based authentication (not JWT)
- User schema includes id, username, and password fields

#### Frontend Components
- **UI Library**: Complete shadcn/ui component system
- **Icons**: Lucide React icons
- **Forms**: React Hook Form with Zod validation
- **Data Fetching**: Custom query client with error handling
- **Mobile Responsive**: Mobile-first design with responsive breakpoints

#### Product Management
- Categories include Beauty, Grocery, Food, Rice, Oil, and Soups
- Product data structure supports images, prices, descriptions
- Shopping cart and wishlist functionality
- Product filtering and search capabilities

## Data Flow

1. **Client-Side**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle HTTP requests with `/api` prefix
3. **Database**: Drizzle ORM manages PostgreSQL operations
4. **State Management**: Client state managed through React Query cache
5. **Error Handling**: Global error handling middleware in Express

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **drizzle-orm**: Database ORM and query builder
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **zod**: Schema validation
- **express**: Web server framework

### UI Dependencies
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **embla-carousel-react**: Carousel component

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling
- **drizzle-kit**: Database migration tool

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses tsx for hot reloading
- **Production**: Runs compiled JavaScript bundle
- **Database**: Requires `DATABASE_URL` environment variable

### File Structure
```
├── client/           # React frontend
├── server/           # Express backend
├── shared/           # Shared types and schemas
├── migrations/       # Database migrations
└── dist/            # Production build output
```

### Hosting Requirements
- Node.js environment with ESM support
- PostgreSQL database (configured for Neon Database)
- Environment variables for database connection
- Static file serving for frontend assets

The application is configured for Replit deployment with development tooling and runtime error handling included.