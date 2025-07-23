# ♻️ Recycling Finder & Pickup Request App (MERN MVP)
A web application that allows users to report littering, find nearby recycling services, and request garbage pickups — built using the MERN stack as part of the SDG 12: Responsible Consumption and Production initiative.

## 🌍 Project Goal

To empower communities to **reduce waste**, **track recycling efforts**, and **report littering** incidents for a cleaner and greener environment in Kenya.


<div align="start"> <a href="./frontend/README.md"> <img src="https://img.shields.io/badge/Recycling-App-32CD32?style=for-the-badge&labelColor=green" alt="Recycling App Badge" /> </a>
<a href="https://recycling-app.vercel.app/"><img src="https://img.shields.io/badge/♻️ LIVE-DEMO-00FF7F?style=for-the-badge&labelColor=green" alt="Live Demo" /></a>
<a href="https://recycling-app.vercel.app/"> <img src="./screenshot/recycling-home" alt="Recycling App Live Demo Screenshot" width="100%" /> <p align="center"><em>Experience the Recycling Finder & Pickup App live - Click to explore!</em></p> </a> </div>

## 📋 Table of Contents

- [Features](#-features)
- [Dashboard Features](#-dashboard-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Database Models](#-database-models)
- [User Roles & Access Control](#-user-roles--access-control)
- [Authentication System](#-authentication-system)
- [Real-time Features](#-real-time-features)
- [Payment Integration](#-payment-integration incoming for Donation)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Development Workflow](#-development-workflow)
- [Testing](#-testing jest and supertest)
- [Deployment](#-deployment)
- [Security Considerations](#-security-considerations)
- [Performance Optimizations](#-performance-optimizations)
- [Mobile Support](#-mobile-support)
- [Localization](#-localization)
- [Future Enhancements](#-future-enhancements)
- [Contributors](#-contributors)
- [License](#-license)
- [Contact](#-contact)

  ## 📖 Overview

The **Recycling Finder & Picker Request App** is a community-driven platform designed to promote responsible waste disposal and recycling in Kenya. Aligned with **UN Sustainable Development Goal 12 (SDG 12)**, the app empowers users to report littering, request garbage pickups, and connect with nearby recyclers.

By bridging the gap between citizens and waste management services, the platform fosters cleaner communities, enhances recycling efforts, and encourages environmental accountability through technology.
### 🎯 Key Objectives

- Promote responsible waste disposal and recycling practices
- Connect users with nearby recyclers and waste pickup services
- Enable easy reporting of littering and garbage hotspots
- Support environmental sustainability and community action
- Raise awareness on recycling through accessible technology
### 🌟 Impact

- Encouraging responsible environmental behavior within communities  
- Reducing litter and illegal dumping through user-generated reports  
- Connecting citizens with reliable recycling and waste collection services  
- Empowering individuals to take part in sustainable waste management  
- Contributing to a cleaner, greener, and healthier Kenya

  ## 🚀 Features

### 🧑‍🤝‍🧑 For Citizens
- **Littering Reports**: Easily report instances of illegal dumping with photo and location
- **Pickup Requests**: Request garbage or recycling pickup from nearby collectors
- **Live Map View**: View nearby recycling centers and active pickup agents
- **Track Requests**: Monitor status of submitted reports and pickups
- **User Dashboard**: Manage your reports, pickups, and history in one place
- **Photo Uploads**: Add visual evidence to reports for better verification
- **Notifications**: Get updates on pickup status, approvals, and environmental tips
- **Language Support**: Switch between English and Swahili for accessibility
- **Sustainability Tips**: Access recycling and eco-friendly living advice
- **Impact Tracker**: Visualize your personal contribution to a cleaner community

### ♻️ For Recyclers (Coming Soon)
- **Pickup Dashboard**: Manage and respond to incoming pickup requests
- **Routing Assistance**: Navigate efficiently to pickup locations
- **Availability Toggle**: Set active/inactive status for availability
- **Earnings Tracker**: Monitor pickup activity and incentives (future feature)
- **Community Rating**: Build trust with a transparent feedback system

## 📊 Dashboard Features

### 👤 User Dashboard
- **Overview Panel**: Summary of total reports, pickups, and environmental impact
- **Submit Pickup**: Form to request garbage or recycling pickup
- **Report Littering**: Quickly report waste hotspots with location and image
- **Activity History**: See a timeline of your past pickups and reports
- **Map Integration**: Visualize report locations and nearby services
- **Edit/Delete**: Modify or cancel submitted requests
- **Language Switcher**: Choose your preferred language (Swahili or English)
- **Community Highlights**: See what others are reporting or cleaning
- **Tips Feed**: Scroll through community-sourced recycling tips and best practices



- 
## 🧑‍💻 Tech Stack

### 🔵 Frontend
frontend/
├── public/ # Static files (e.g., index.html, icons)
├── src/
│ ├── assets/ # Images, icons, and branding assets
│ ├── auth/ # Authentication pages and logic
│ │ ├── Login.jsx # Login form
│ │ ├── Register.jsx # Registration form
│ │ └── authSlice.js # Redux slice or context for auth state
│ ├── components/ # Reusable UI components
│ │ ├── Navbar.jsx # Navigation bar
│ │ ├── Footer.jsx # Footer section
│ │ ├── Sidebar.jsx # Dashboard sidebar
│ │ └── Loader.jsx # Loading spinner or placeholder
│ ├── dashboard/ # Dashboard-specific pages
│ │ ├── DashboardHome.jsx # Main user dashboard with charts/summary
│ │ ├── Reports.jsx # View/report littering and pickups
│ │ └── Profile.jsx # User profile and settings
│ ├── data/ # Dummy/mock data for UI testing
│ ├── hooks/ # Custom React hooks (e.g., useAuth, useFetch)
│ ├── i18n/ # Localization (e.g., English/Swahili support)
│ ├── pages/ # Main app pages
│ │ ├── Home.jsx # Landing page
│ │ ├── About.jsx # About the project
│ │ ├── Contact.jsx # Contact/Help page
│ │ └── NotFound.jsx # 404 fallback page
│ ├── services/ # Axios API calls to backend
│ │ ├── api.js # Axios config with interceptors
│ │ └── userService.js # API functions (e.g., login, register, report)
│ ├── store/ # Global state (e.g., Redux or Context API)
│ │ ├── index.js # Store setup
│ │ └── userSlice.js # User-related state management
│ ├── App.jsx # Main React component with routes
│ ├── main.jsx # React app entry point (Vite/ReactDOM)
│ └── App.css # Global styles
├── .env # Frontend environment variables
├── vite.config.js # Vite build tool configuration
└── package.json # Dependencies and scripts

### 🟢 Backend
backend/
├── config/ # Configuration files (e.g., DB, environment)
│ └── db.js # MongoDB connection setup
├── controllers/ # Request handlers for different features
│ ├── authController.js # Authentication logic (login/register)
│ ├── userController.js # User profile and data management
│ ├── recyclerController.js # Recycler-specific functionalities
│ ├── requestController.js # Handles pickup/littering request logic
│ ├── dashboardController.js # Dashboard data and stats
│ └── pickupController.js # Pickup management and assignment
├── middleware/ # Express middleware
│ ├── auth.js # JWT authentication middleware
│ └── errorHandler.js # Centralized error handling
├── models/ # Mongoose models
│ ├── User.js # User schema (role-based: user/recycler)
│ ├── Request.js # Schema for littering or pickup requests
│ ├── Pickup.js # Schema for scheduled or completed pickups
│ └── Notification.js # Real-time alert/notification schema (optional)
├── routes/ # Route definitions
│ ├── authRoutes.js # Auth-related endpoints
│ ├── userRoutes.js # User-specific routes
│ ├── recyclerRoutes.js # Recycler-related routes
│ ├── requestRoutes.js # Littering and pickup request routes
│ ├── dashboardRoutes.js # Dashboard analytics routes
│ └── pickupRoutes.js # Pickup management routes
├── utils/ # Utility helpers (e.g., token, validators)
│ ├── generateToken.js # JWT token generator
│ └── validators.js # Input validation functions
├── .env # Environment variables
├── package.json # Project metadata and dependencies
└── server.js # Main server entry point

🚀 Getting Started
This section helps you set up and run the Recycling Finder & Picker Request App on your local machine for development and testing.

✅ Prerequisites
Before you begin, ensure you have the following installed and configured:

1. Node.js (v14 or higher)
Node.js is required to run the backend server and install project dependencies.

📥 Download from: https://nodejs.org/

✅ Check if installed:

bash
node -v
npm -v

2. MongoDB (Local or Atlas Cloud)
The app uses MongoDB for storing users, reports, pickups, and other data.

🔧 Options:

Local MongoDB: Download MongoDB Community Server

MongoDB Atlas (recommended): https://www.mongodb.com/cloud/atlas

📌 Store your MongoDB URI in a .env file:

env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/yourDB


🛠️ Installation
Follow these steps to set up the project locally:

Clone the Repository

bash
git clone https://github.com/your-username/recycling-app.git
cd recycling-app
Install Backend Dependencies

bash
cd backend
npm install
Install Frontend Dependencies

bash
cd ../frontend
npm install

📦 Running the App
To run both the frontend and backend during development:

Start Backend Server

bash
cd backend
npm run dev
Start Frontend (React)

bash
cd ../frontend
npm start
🔄 Make sure both servers are running:

Backend: http://localhost:5000

Frontend: http://localhost:3000

🔐 Environment Setup (.env)
Create a .env file in the backend/ directory and add your environment variables:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
⚠️ Never commit your .env file. It should be in .gitignore.

## 📱 Mobile Support
The web application is responsive and works on mobile devices. The application has been tested and optimized for:

- iOS (Safari, Chrome)
- Android (Chrome, Firefox, Samsung Internet)
- Various screen sizes (phone, tablet, desktop)

🧪 Testing
Backend tested with Jest and Supertest

Frontend testing (React Testing Library or Cypress)

📬 Contact
Built with 💡 and ❤️ by Erastus Wainaina

GitHub: @wainaina-mwangi

Email: wainainaerastus2@gmail.com
