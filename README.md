# Full Stack Open - Part 0 & Part 1

This repository contains my solutions for the Full Stack Open course exercises.

## Part 0 - Fundamentals of Web apps

### Exercises 0.4-0.6: Sequence Diagrams

- **0.4**: [sequence-diagram.md](./sequence-diagram.md) - New note in traditional web app
- **0.5**: [spa-diagram.md](./spa-diagram.md) - Loading the Single Page App
- **0.6**: [spa-new-note-diagram.md](./spa-new-note-diagram.md) - Creating a new note in SPA

## Part 1 - Introduction to React

The Part 1 exercises are organized into three separate applications:

### 1. courseinfo (Exercises 1.1-1.5)

Course information application demonstrating:
- Component creation and composition
- Props passing between components
- Using objects and arrays to structure data

**To run:**
```bash
cd courseinfo
npm install
npm run dev
```

### 2. unicafe (Exercises 1.6-1.11)

Customer feedback application for Unicafe restaurant featuring:
- State management with `useState`
- Event handlers
- Conditional rendering
- Statistics calculation (average, percentage)
- Component refactoring (Button, Statistics, StatisticLine)
- Data display in HTML table

**To run:**
```bash
cd unicafe
npm install
npm run dev
```

### 3. anecdotes (Exercises 1.12-1.14)

Software engineering anecdotes application with:
- Random anecdote selection
- Voting functionality
- State management with arrays
- Displaying the most voted anecdote

**To run:**
```bash
cd anecdotes
npm install
npm run dev
```

## Part 2 - Communicating with server

### 1. courseinfo (Exercises 2.1-2.5)

Extended Course Information app features:
- Handling multiple courses
- Arbitrary number of course parts
- Modular `Course` component
- Calculation of totals using `reduce`

**To run:**
```bash
cd courseinfo
npm install
npm run dev
```

### 2. phonebook (Exercises 2.6-2.11, 2.15-2.20)

Full-featured Phonebook application including:
- Backend integration with `json-server`
- Complete CRUD operations (Create, Read, Update, Delete)
- Search filter functionality
- Duplicate name rendering
- Notification system for success/error messages
- Styled components

**To run:**
1. Start the backend server:
   ```bash
   cd phonebook
   npx json-server --port 3001 db.json
   ```
2. Start the frontend (in a new terminal):
   ```bash
   cd phonebook
   npm install
   npm run dev
   ```

### 3. countries (Exercises 2.18-2.20)

Countries data viewer featuring:
- Integration with [REST Countries API](https://studies.cs.helsinki.fi/restcountries/)
- Search functionality with dynamic filtering
- Detailed country views (capital, area, languages, flag)
- Weather data integration via [OpenWeatherMap API](https://openweathermap.org/)
- Handling of API keys via environment variables

**To run:**
1. Create a `.env.local` file in the `countries` directory with your API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
2. Start the application:
   ```bash
   cd countries
   npm install
   npm run dev
   ```

## Technologies Used

- **React** - Frontend library
- **Vite** - Build tool and development server
- **JavaScript (ES6+)** - Programming language
- **Mermaid** - Diagram syntax for sequence diagrams

## Course Information

Full Stack Open is a free online course offered by the University of Helsinki and Houston Inc.

Course website: [https://fullstackopen.com](https://fullstackopen.com)
