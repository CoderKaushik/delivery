# Fullstack MERN Project

Welcome to the Fullstack MERN (MongoDB, Express.js, React.js, Node.js) project, Tomato - Food Delivery Website!

This project is designed to demonstrate a full-fledged MERN application with features including user authentication, backend API, and integration with Stripe for payments.

## Frontend

The frontend of the application is deployed on Vercel. Users can access the application using the following URL:

[Frontend URL](https://delivery-weld-one.vercel.app/)

The frontend is built with React.js, handling the user interface and interactions.

## Admin Page

For administrative tasks and managing the system, there's an admin page available. Admins can access it using the following URL:

[Admin Page URL](https://delivery-weld-one.vercel.app/admin)

## Backend

The backend of the application is deployed on Render. It serves as the API server for the frontend, handling requests, interacting with the database, and managing business logic.

[Backend URL](https://delivery-backend-m8j3.onrender.com)

The backend is built with Node.js and Express.js, providing RESTful APIs for the frontend to consume.

## Payment Integration

For payment processing, the application integrates with Stripe. You can use the following dummy card information for testing:

- Card Number: `4000003560000008`
- Expiration Date: Any future date
- CVC: Any 3 digits

Please **do not** use real payment information in this testing environment.

## Local Setup

To set up this project locally for development or testing:

1. Clone this repository.
2. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.
3. Navigate to the `backend` directory and run `npm install` to install backend dependencies.
4. Create a `.env` file in the `backend` directory and add necessary environment variables.
5. Run the backend and frontend servers separately using `npm run server` and `npm run dev`.

Make sure to set up environment variables for both frontend and backend according to their respective requirements.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Stripe API
