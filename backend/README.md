# Express Server JWT

A simple server with JWT authentication with the ability to create new users, and to authenticate the existing ones.

## Requirements
- Node.js
- NPM
- Docker or MongoDB locally

## Endpoints:

* /api/register - POST (email, password)
* /api/login - POST (email, password)
* /api/validate - GET (checks for authorization in HEADER which contains token)

## Get Started:

Install all dependencies:
```
npm install
```

Configure the server:
```
touch config.js

# configuration should look like this:
module.exports = {
  db: [your db url],
  port: [the port of the server],
  secret: [secret word for JWT]
};
```

In case you dont have MongoDB installed locally, you can use docker image:

- Pull image and run it for the first time
```
docker run -it -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4
```

- Stop container
```
docker stop mongodb
```

- Start container
```
docker start mongodb
```


Run the server:
```
npm start
```