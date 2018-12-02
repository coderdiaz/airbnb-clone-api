# Airbnb API
### API using `Express`, `Mongoose`, `Node` and `Firebase Auth` based on [Airbnb](https://airbnb.com).

### Dependencies
1. [Node](https://nodejs.org).
2. [MongoDB](https://www.mongodb.com/download-center).
3. [Firebase Account](https://firebase.google.com).

### Getting Started
First copy `.env.example` to `.env` and modify the environment variables with your credentials.

```sh
$ cp .env.example .env
```

```
DEBUG=airbnb:*
PORT=3000

MONGO_URI=mongodb://localhost/airbnb

FIREBASE_APIKEY=secret
FIREBASE_AUTHDOMAIN=secret
FIREBASE_DATABASEURL=secret
FIREBASE_STORAGEBUCKET=secret
FIREBASE_MESSAGINGSENDERID=secret
```

### Development
```bash
# Install dependencies

$ yarn # Yarn
$ npm i # Npm


# Start serve

$ yarn dev # Yarn
$ npm run dev # Npm
```

For any feedback contact me `hello@coderdiaz.me`.

Created with love and other things :heart: