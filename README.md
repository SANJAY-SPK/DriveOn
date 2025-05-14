# DriveOn - Car Rental Platform

DriveOn is a modern car rental web application built with React, Tailwind CSS, and a modular component architecture.

## Features

- Browse and filter vehicles by type, price, and more
- User authentication (signup, login)
- Book vehicles with date selection
- View and manage bookings
- Manage personal and payment information
- Admin dashboard for vehicle and booking management
- Responsive design for desktop and mobile
- Demo only: **Do not enter real personal or payment information**

## Folder Structure

```
driveon-frontend/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and logos
│   ├── components/        # Reusable UI and feature components
│   │   ├── profile/       # User profile components
│   │   │   └── tabs/      # Profile tab components
│   │   ├── ui/            # UI primitives (Button, Card, Dialog, etc.)
│   ├── data/              # Mock data (vehicles, etc.)
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components (Home, Vehicles, Booking, etc.)
│   ├── index.css          # Tailwind and global styles
│   ├── App.jsx            # Main app entry
│   └── ...
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## Demo Credentials

- **Admin:** `admin@driveon.com` / `12345678`
- **User:** `user@driveon.com` / `12345678`

## Tech Stack

- React
- Tailwind CSS
- React Router
- Lucide Icons
- date-fns

## Notes

- This project uses mock data and does not connect to a real backend. The backed of this project in development stage with spring boot.
- For demonstration purposes only. **Do not use real personal or payment information.**

## License

MIT
