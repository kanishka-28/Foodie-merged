# Foodie web-app

The Foodie app is a food-delivery and cloud kitchen service designed for both customers and restaurant owners.

Created using MongoDB, Express.js, React.js, Redux, Node.js


## clone or download
```terminal
$ git clone git@github.com:kanishka-28/Foodie-merged.git
```


# Usage (run foodie app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)


## Food-app-frontend(customers) client-side usage(PORT: 3000)
```terminal
$ cd food-app-frontend          // go to food-app-frontend folder
$ yarn # or npm i               // npm install packages
$ npm start                     // run it locally
```

## Restaurant-app-frontend(owners) client-side usage(PORT: 3001)
```terminal
$ cd restaurant-app-frontend          // go to restaurant-app folder
$ yarn # or npm i                     // npm install packages
$ npm start                           // run it locally
```

## Food-app-backend Server-side usage(PORT: 4000)

### Prepare your secret

(You need to add a MONGO_URL in .env to connect to MongoDB)

```terminal
// in the root level
$ cd food-app-backend                 // go to food-app-backend folder
$ echo "MONGO_URL=YOUR_MONGO_URL" >> src/.env
```

### Start

```terminal
// in the root level
$ cd food-app-backend                 // go to food-app-backend folder
$ npm i                               // npm install packages
$ npm start                           // run it locally
```


# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^0.15.3 | bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18| nodemailer: ^6.7.5,
react-router-dom: ^4.2.2 | cors: ^2.8.1
react: ^16.2.0 | dotenv: ^2.0.0
react-dom: ^16.2.0 | express: ^4.14.0
react-redux: ^4.0.0 | jsonwebtoken: ^8.5.1,
tailwindcss: ^3.0.24 | mongoose: ^4.7.4
redux: ^3.7.2 | serverless-http: ^3.2.0
redux-thunk: ^2.1.0 | passport: ^0.4.1


## BUGs or comments

[Create new Issues](https://github.com/kanishka-28/Foodie-merged/issues) (preferred)

Email Me: kanishkagour28@gmail.com (welcome, say hi)

## Author
[kanishka-28]([https://master--kanishka-gour.netlify.app/])

