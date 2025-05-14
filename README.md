# DriveOn - Car Rental Platform

[Live Demo](https://drive-on-zeta.vercel.app/)

**DriveOn** is a modern, responsive car rental web application built with React (Vite), Tailwind CSS, and a modular component-based architecture. It allows users to browse available vehicles, book rentals, manage bookings, and interact with a simulated car rental experience. The admin portal provides tools for managing listings and tracking bookings.

---

## Features

### For Customers:
- Browse and filter vehicles by type (SUV, Sedan, etc.) and price
- Responsive vehicle listing with details (model, transmission, seats, availability)
- Booking system with date selection and form validation
- View and manage personal bookings
- Responsive design optimized for desktop and mobile

### For Admins:
- Secure admin login
- Manage vehicle listings (add/edit/delete)
- View and update bookings
- Admin dashboard with vehicle and booking management

---

## Folder Structure

```
driveon-frontend/
├── public/                # Static assets (favicon, index.html)
├── src/
│   ├── assets/            # Images and logos
│   ├── components/        # Reusable UI components
│   │   ├── profile/       # Profile-related components
│   │   │   └── tabs/      # Profile tab views
│   │   ├── ui/            # Primitives (Button, Card, Dialog, etc.)
│   ├── data/              # Mock data (vehicles, bookings)
│   ├── lib/               # Utility and helper functions
│   ├── pages/             # Pages (Home, Vehicles, Booking, Admin)
│   ├── index.css          # Tailwind + global styles
│   ├── App.jsx            # Main application entry
│   └── ...
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## ⚙Getting Started

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/driveon-frontend.git
cd driveon-frontend
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the development server:
```bash
npm run dev
```

### 4. Open in your browser:
```
http://localhost:5173
```

---

## Live Demo

Access the deployed version here:  
[https://drive-on-zeta.vercel.app/](https://drive-on-zeta.vercel.app/)

---

## Demo Credentials

| Role   | Email                | Password   |
|--------|----------------------|------------|
| Admin  | `admin@driveon.com`  | `12345678` |
| User   | `user@driveon.com`   | `12345678` |

---

## Tech Stack

- **Frontend:** React (Vite), JSX
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide Icons
- **Date Handling:** date-fns
- **API Layer (Upcoming):** Axios to connect to Spring Boot backend
- **Backend (Under Development):** Spring Boot (MVC + REST), MySQL

---

## Notes

- This project currently uses **mock data** for vehicles and bookings.
- Backend is under active development using Spring Boot and MySQL.
- Authentication and payment are simulated for demonstration purposes only.

---

### Need Help?

If you encounter issues or bugs, feel free to open an [issue](https://github.com/your-username/driveon-frontend/issues) or reach out directly.
