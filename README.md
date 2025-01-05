# Flight Price API Backend

Backend service for flight price search with authentication.

## Tech Stack
- Node.js
- Express
- JWT Authentication

## Setup
```bash
# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Start server
npm start
```

## Environment Variables
```
PORT=5000
JWT_SECRET=your-secret-key
```

## API Endpoints

### Authentication
- POST `/api/auth/register`: Register new user
  - Body: `{ email: string, password: string }`
- POST `/api/auth/login`: Login user
  - Body: `{ email: string, password: string }`

### Flights
- POST `/api/flights`: Search flights
  - Body: `{ source: string, destination: string, date: string, passengers: number, route: string }`
- GET `/api/prices`: Get flight prices
  - Query: `?source=string&destination=string&date=string`

## Project Structure
```
backend/
├── src/
│   ├── index.js
│   ├── routes/
│   │   ├── flightRoutes.js
│   │   └── authRoutes.js
│   ├── controllers/
│   │   └── flightController.js
│   ├── services/
│   │   └── flightService.js
│   └── data/
│       └── mockFlights.js
└── package.json
```


2. Configure environment variables in Vercel dashboard
3. Deploy using Vercel CLI or GitHub integration
