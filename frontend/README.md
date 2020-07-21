# Next.js authentication with JWT

A simple JWT authentication for Next.js with the ability to authenticate existing users.

This project uses cookies for storing JWT token, for best security practices use httpOnly cookies.

## Requirements
- Node.js
- NPM
- **JWT server** - see [backend](../backend) directory for instructions

## Endpoints:

* `/` - Home page
* `/secured` - Secured page (accessible ONLY when user is authenticated)
* `/logout` - Log out user by removing token from cookie

## Get Started:

Install all dependencies:
```
npm install
```

Configure the server:

By default app send requests to auth server on localhost:3001
But it can be changed with environment variable - **API_URL**
For more info see next.config.js

Run the server:
```
npm start
```
