# Lynkify

Lynkify is a full-stack referral platform designed to connect businesses, sellers, and administrators. It enables users to generate, manage, and track referral links, providing a seamless experience for all stakeholders.

---

## Table of Contents
- [Lynkify](#lynkify)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Backend](#backend)
    - [Run Backend](#run-backend)
  - [Frontend](#frontend)
    - [Run Frontend](#run-frontend)
  - [Getting Started](#getting-started)
  - [License](#license)

---

## Features
- User authentication (register/login)
- Role-based dashboards (Admin, Seller, Business)
- Referral link generation and management
- Business approval workflow
- Reward and earnings tracking
- Modern, responsive UI (React + Tailwind CSS)

---

## Project Structure
```
Lynkify/
├── Backend/      # Node.js/Express backend API
├── Frontend/     # React frontend app
├── azure-pipelines.yml (CI/CD)
```

---

## Backend
- **Tech Stack:** Node.js, Express, MongoDB, Mongoose
- **Key Features:**
  - RESTful API for authentication and business logic
  - JWT-based authentication
  - User roles: admin, business, seller
  - MongoDB models for users and businesses
  - Environment config via dotenv

### Run Backend
```bash
cd Backend
npm install
npm run dev
```

---

## Frontend
- **Tech Stack:** React, Tailwind CSS, Chart.js, React Router
- **Key Features:**
  - Role-based dashboards
  - Referral link management
  - Business approval UI
  - Data visualization for sellers

### Run Frontend
```bash
cd Frontend
npm install
npm start
```

---

## Getting Started
1. Clone the repository
2. Set up environment variables for the backend (see `Backend/src/config/dotenv.js`)
3. Start MongoDB (local or Atlas)
4. Run backend and frontend as described above
5. Access the app at [http://localhost:3000](http://localhost:3000)

---

## License
MIT
