# Full Stack Open Part 0-3

This repository contains solutions for the Full Stack Open course exercises.

## Part 0 - Web App Fundamentals
- Sequence diagrams for traditional web apps and SPAs.
- Located in the root directory (`*.md` files).

## Part 1 - Introduction to React

### 1. courseinfo (Exercises 1.1-1.5)
Basic React concepts, components, props.

### 2. unicafe (Exercises 1.6-1.11)
State management, event handling, feedback application.

### 3. anecdotes (Exercises 1.12-1.14)
Anecdotes app with voting functionality.

## Part 2 - Communicating with server

### 1. courseinfo (Exercises 2.1-2.5)
Modules, rendering collections, `reduce`.

### 2. phonebook (Exercises 2.6-2.11, 2.15-2.20)
Full-featured Phonebook with `json-server`, filtering, notifications.

### 3. countries (Exercises 2.18-2.20)
Countries data viewer with API integration (REST Countries, OpenWeatherMap).

## Part 3 - Backend with Node.js and Express

### 1. Phonebook Backend (3.1-3.22)

Node.js/Express backend for the Phonebook application ensuring:
- REST API implementation (GET, POST, DELETE, PUT)
- MongoDB integration with Mongoose
- Validation for people's names and numbers
- Linting with ESLint
- Deployment ready (serves frontend static build)

**To run:**
1. Create a `.env` file in `phonebook-backend/` with your MongoDB URI:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3001
   ```
2. Start the backend:
   ```bash
   cd phonebook-backend
   npm install
   npm start
   ```
   (or `npm run dev` for development with nodemon)

## Part 4 - Testing the Backend, User Administration, Token Auth

### 2. Blog List Backend (4.1-4.23 + 5.1-5.23)

Advanced Node.js/Express backend including:
- Modular structure (controllers, models, utils)
- Unit and Integration testing with Jest & Supertest
- User administration (bcrypt password hashing)
- Token-based authentication (JWT)
- Authenticated operations (creating/deleting blogs)
- **Part 5 Update:** End-to-End testing support (reset endpoint)

**To run:**
1. Create a `.env` file in `blog-list-backend/` with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3003
   SECRET=your_jwt_secret_string
   ```
2. Start the backend:
   ```bash
   cd blog-list-backend
   npm install
   npm run dev
   ```
   (For Part 5 E2E testing, use `npm run start:test`)

3. Run tests:
   ```bash
   npm test
   ```

### 3. Blog List Frontend (5.1-5.23)

React Frontend (Vite) for the Blog List application:
- Login functionality (persisted in localStorage)
- Blog management (Create, Like, Delete)
- Toggling visibility (Togglable component)
- Notifications
- **Testing:**
  - Unit Tests: Vitest + React Testing Library (`npm test`)
  - E2E Tests: Playwright (`npx playwright test`)

**To run:**
1. Ensure backend is running.
2. Start frontend:
   ```bash
   cd bloglist-frontend
   npm install
   npm run dev
   ```

## Technologies Used

- **React** - Frontend library (Vite)
- **Node.js & Express** - Backend
- **MongoDB** - Database
- **Jest & Supertest** - Backend Testing
- **Vitest & React Testing Library** - Frontend Unit Testing
- **Playwright** - End-to-End Testing
- **Bcrypt & JWT** - Security
