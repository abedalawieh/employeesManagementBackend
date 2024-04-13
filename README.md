# Employees Management System

Welcome to the backend repository for Emoloyees Management System! This repository contains all the necessary code to run the backend server for our application.

## Setup

Before running the backend server, make sure you have Node.js npm , and PostGresSQL DB installed on your machine.

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all the required dependencies.

### Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

# The port where the Node.js server will run

PORT=4000

# Environment mode: development, production, etc.

NODE_ENV=development

# PostgreSQL database credentials

DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=your_database_name

# Frontend URL for CORS configuration

FRONTEND_URL=http://localhost:3000

# Default administrator details (to be created when the admin model runs)

ADMIN_NAME=Admin Name
ADMIN_PASSWORD=Admin Password
ADMIN_EMAIL=admin@example.com

# Default URL for employee profile pictures

EMPLOYEE_DEFAULT_PROFILE_PICTURE=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11hjvD3y1L-qHpL6tzE3YbTB6ck-bJ3uVEvgGG52QOg&s

# Secret key for JWT (JSON Web Tokens)

SECRET_KEY=your_secret_key_for_jwt

# After configuring the environment variables, run `npm run dev` to start the server in development mode
