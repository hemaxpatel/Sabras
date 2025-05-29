# SABRAS Online Store

Sabras is a comprehensive full-stack e-commerce application designed to facilitate seamless online shopping experiences. The platform offers robust functionalities for both users and administrators, ensuring efficient product management and secure transactions.

![Home Page](https://github.com/user-attachments/assets/10823072-beab-4de1-8cf8-10ac79fd837b)
![Explore Menu](https://github.com/user-attachments/assets/6f3a1393-0c77-414d-9521-47322c4c2e2a)
![Cart and Checkout page](https://github.com/user-attachments/assets/c1d90a2d-1d76-49a6-bb1a-9a03e0225248)
- Admin Panel

![Add Item Page](https://github.com/user-attachments/assets/cad403e7-d1bd-444d-8193-a675e4565eed)
![Order List](https://github.com/user-attachments/assets/3f8f1617-3b5a-4d9f-8252-1ca30c6790e2)


## Features

- User Panel
- Admin Panel
- JWT Authentication
- Password Hashing with Bcrypt
- Stripe Payment Integration
- Login/Signup
- Logout
- Add to Cart
- Place Order
- Order Management
- Products Management
- Filter Products
- Login/Signup
- Authenticated APIs
- REST APIs
- Role-Based Identification
- Beautiful Alerts

## Tech Stack

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [Mongodb](https://www.mongodb.com/)
- [Stripe](https://stripe.com/)
- [JWT-Authentication](https://jwt.io/introduction)
- [Multer](https://www.npmjs.com/package/multer)

## Run Locally

Clone the project

```bash
    git clone https://github.com/hemaxpatel/Sabras.git
```

Install dependencies (frontend)

```bash
    cd frontend
    npm install
```

Start the Frontend server

```bash
    npm run dev
```

Install dependencies (backend)

```bash
    cd backend
    npm install
```

Start the Backend server

```bash
    npm run server
```

Install dependencies (admin)

```bash
    cd admin
    npm install
```

Start the Admin server

```bash
    npm run dev
```

Make .env file in "backend" folder and store environment Variables

```bash
  JWT_SECRET=YOUR_SECRET_TEXT
  SALT=10
  MONGO_URL=YOUR_DATABASE_URL
  STRIPE_SECRET_KEY=YOUR_KEY
  PORT=4000
```

Setup the Frontend and Backend URL

- App.jsx in Admin folder
  const url = YOUR_BACKEND_URL
- StoreContext.js in Frontend folder
  const url = YOUR_BACKEND_URL

- orderController in Backend folder
  const frontend_url = YOUR_FRONTEND_URL
