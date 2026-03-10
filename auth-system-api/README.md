# Auth System API

Laravel backend API for the authentication system.

## Features

- User registration
- Login with token-based authentication (Sanctum)
- Logout
- Personal access tokens

## Setup

```bash
composer install
cp .env.example .env
php artisan migrate
php artisan serve
```

API will run on: `http://127.0.0.1:8000`

## API Endpoints

| Method | Endpoint       | Description       |
|--------|----------------|-----------------|
| POST   | /api/register  | Register user     |
| POST   | /api/login     | Login user        |
| POST   | /api/logout    | Logout user       |
