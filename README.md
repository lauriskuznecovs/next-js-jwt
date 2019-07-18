# JWT authentication with Express and Next.js

## Introduction

This repo hold both - server and client apps for fully functional example of JWT authentication.

- [Server](./backend) - based on Express and MongoDB as data storage, but can be replaced to any custom data storage.
- [Client](./frontend) - based on Next.js.

## Workflow

1. Run MongoDB, Server and Client.

1. Register user (described in backend directory).

2. Enter enter email/password in client app, press submit.

3. App sends request to server for user authentication.

   * SUCCESS - responds with **token** which is stored in cookie.

   * FAILURE - respond with particular HTTP code (no user data specified or wrong auth data provided).

4. By navigating between pages client app sends request to server with token to validation.
