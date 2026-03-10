# Auth System

Full-stack **Authentication System** built with **Laravel (Backend API)** and **React (Frontend)**.

## Project Overview

This project provides a complete authentication system with:

- **API backend** using Laravel + Sanctum for secure token-based authentication
- **Frontend SPA** using React, connected to the Laravel API

## Project Structure

```
auth-system/
 ├── auth-system-api/   → Laravel backend API
 └── auth-system-web/   → React frontend
```

## Tech Stack

- **Backend:** Laravel, Sanctum, MySQL
- **Frontend:** React, Axios
- **Other Tools:** Git, Composer, NPM

## Quick Setup

### Backend

```bash
cd auth-system-api
composer install
cp .env.example .env
php artisan migrate
php artisan serve
```

### Frontend

```bash
cd auth-system-web
npm install
npm start
```

## Contributing

Feel free to open issues or submit pull requests. Please follow branch naming and commit best practices.

## License

MIT
