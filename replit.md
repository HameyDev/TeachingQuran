# Overview

This is an online Qur'an teaching service web application built with a modern React frontend and Express.js backend. The platform provides comprehensive Islamic education with features for learning Qur'an reading (Nazra), memorization (Hifz), Tajweed, and basic Islamic studies. The application includes a landing page with course information, benefits, testimonials, and a contact form for student inquiries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool

**Routing**: Wouter for lightweight client-side routing with single-page application structure

**UI Components**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling

**State Management**: TanStack React Query for server state management and caching

**Animations**: Framer Motion for smooth page transitions and component animations

**Theme System**: Custom theme provider supporting light/dark modes with system preference detection

## Backend Architecture

**Framework**: Express.js with TypeScript using ES modules

**API Design**: RESTful API with structured error handling and request validation

**Data Validation**: Zod schemas for runtime type checking and input validation

**Storage Interface**: Abstracted storage layer with in-memory implementation for development

**Development Setup**: Vite integration for hot module replacement in development mode

## Data Storage

**ORM**: Drizzle ORM with PostgreSQL dialect configuration

**Database**: Configured for Neon Database (serverless PostgreSQL)

**Schema Design**: 
- Users table with UUID primary keys and unique username constraints
- Contact submissions table for storing student inquiries with timestamps
- Type-safe schema definitions with Zod integration

## Design System

**Typography**: Poppins font family with consistent weight hierarchy

**Color Palette**: Islamic-themed colors with deep green primary (#228B45) and warm gold accents

**Layout**: Responsive design with Tailwind spacing units and mobile-first approach

**Components**: Reusable UI components following shadcn/ui patterns with Islamic design elements

## External Dependencies

**Database**: Neon Database (serverless PostgreSQL) via @neondatabase/serverless

**UI Framework**: Radix UI primitives for accessible component foundations

**Styling**: Tailwind CSS with PostCSS for utility-first styling

**Validation**: Zod for schema validation and type safety

**Fonts**: Google Fonts (Poppins) for typography

**Development Tools**: 
- ESBuild for production bundling
- Drizzle Kit for database migrations
- TypeScript for type safety across the stack

**Session Management**: Connect-pg-simple for PostgreSQL session storage

**Image Assets**: Static images stored in attached_assets directory for UI elements