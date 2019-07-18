# Next.js authentication with JWT

A simple JWT authentication for Next.js with the ability to authenticate existing users.

## Workflow

1. User enter email/password, press submit.

2. App sends request to backend for user authentication.

   * SUCCESS - responds with **token** which is stored in cookie.

   * FAILURE - respond with HTTP code (no user data specified or wrong auth data provided).

3. By navigation between pages App sends request with token to validation endpoint.

## Requirements
- Node.js
- NPM
- **JWT server** - see /backend directory for instructions

## Endpoints:

* / - Home page
* /secured - Secured page (accessible ONLY when user is authenticated)
* /logout - Log out user by removing token from cookie

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