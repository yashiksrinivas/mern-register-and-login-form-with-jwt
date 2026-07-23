# mern-register-and-login-form-with-jwt

A simple MERN authentication project created for learning and practicing the authentication flow using React, Express, MongoDB, Mongoose, bcrypt, and JWT.


- React
- Fetch API
- useState
- useEffect


- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- cors


- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Token Generation
- JWT Token Validation
- Protected Profile Route
- Store JWT Token in localStorage


```
Project

backend
    server.js

frontend
    src
        Register.jsx
        Login.jsx
        Dashboard.jsx
        App.jsx
```


```bash
cd backend

npm install

node server.js
```

Server runs on

```
http://localhost:5000
```


```bash
cd frontend

npm install

npm run dev
```

React runs on

```
http://localhost:5173
```


```javascript
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
```

Database Name

```
authDB
```


```
POST /register
```

Request Body

```json
{
    "name":"John",
    "email":"john@gmail.com",
    "password":"123456"
}
```


```
POST /login
```

Request Body

```json
{
    "email":"john@gmail.com",
    "password":"123456"
}
```


```
GET /profile
```

Headers

```
authorization : JWT_TOKEN
```


Register

```
React Form
      ↓
Fetch Request
      ↓
Express
      ↓
bcrypt.hash()
      ↓
MongoDB
```

Login

```
React Form
      ↓
Fetch Request
      ↓
Find User
      ↓
bcrypt.compare()
      ↓
JWT Token
      ↓
localStorage
```

Protected Route

```
Read Token
      ↓
Authorization Header
      ↓
JWT Verify
      ↓
Return User Profile
```


Backend Packages

```
express
mongoose
bcryptjs
jsonwebtoken
cors
```

Frontend Packages

```
react
```


This project demonstrates:

- React Controlled Components
- React Hooks
- Fetch API
- Express Routing
- MongoDB CRUD
- Mongoose Models
- Password Hashing
- JWT Authentication
- Protected Routes
- Local Storage
- Client and Server Communication

