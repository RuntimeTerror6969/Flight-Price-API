# Flight Price API Backend

Node.js-based backend for handling flight price search and user authentication.

## Tech Stack
- **Node.js**: Backend runtime
- **Express**: Web framework
- **JWT**: For user authentication
- **CORS**: To handle cross-origin requests

## Features
- Flight search by source, destination, and date
- User authentication (Login/Register)
- Mock flight data for quick testing

## Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RuntimeTerror6969/Flight-Price-API-Backend.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Flight-Price-API-Backend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Configure environment variables:**
   - Create a `.env` file in the root directory:
     ```bash
     JWT_SECRET=your-secret-key
     PORT=5000
     ```

5. **Start the server:**
   ```bash
   npm start
   ```

6. **Test the API:**
   - Open Postman or a browser and access:
     ```
     http://localhost:5000/api
     ```

---

## API Endpoints

### **Authentication**
- **POST** `/api/auth/login`  
  Authenticate a user with email and password.

- **POST** `/api/auth/register`  
  Register a new user.

### **Flight Search**
- **POST** `/api/flights`  
  Search flights based on source, destination, and date.

---

## Deployment (Vercel)

### Deploying the Backend
1. Push your repository to GitHub.
2. Go to the [Vercel dashboard](https://vercel.com/).
3. Click **Add New Project** and import your repository.
4. Configure the environment variables in the Vercel dashboard:
   - `JWT_SECRET`: Secret key for JWT authentication
   - `PORT`: Optional (Vercel assigns a default port)
5. Deploy the backend. Vercel will provide a live URL.

---

## Project Structure

```plaintext
backend/
├── src/
│   ├── index.js             # Entry point
│   ├── routes/              # API routes
│   │   ├── authRoutes.js
│   │   └── flightRoutes.js
│   ├── controllers/         # Request handlers
│   │   ├── authController.js
│   │   └── flightController.js
│   ├── services/            # Business logic
│   │   └── flightService.js
│   └── data/                # Mock data
│       └── mockFlights.js
└── package.json             # Project dependencies and scripts
```

---

## Environment Variables

Create a `.env` file in the root directory with the following:

```
JWT_SECRET=your-secret-key
PORT=5000
```

---

## Available Scripts

### Start Development Server
```bash
npm start
```

---

## Additional Notes

- Test the backend endpoints using Postman or curl.
- For frontend setup, visit the [Frontend Repository](https://github.com/RuntimeTerror6969/Flight-Price-API-Frontend).

---
