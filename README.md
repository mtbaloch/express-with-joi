# Express with Joi Backend

This project demonstrates how to build a RESTful API using **Express.js** and **Joi** for request validation.

## Project Structure

```
express-with-joi/
├── node_modules/
├── src/
│   ├── middlewares/
│   ├── schemas/
│   └── app.js
├── package.json
├── .env
├── .env.example
└── README.md
```

- **src/schemas/**: Joi schemas for validating requests.
- **src/middlewares/**: Joi middleware to validate data in express middleware.
- **src/server.js**: Main Express app setup.

## Getting Started
0. **Clone the repository:**
  ```bash
  git clone https://github.com/mtbaloch/express-with-joi.git
  cd express-with-joi
  ```
1. **Install dependencies:**
  ```bash
  npm install
  ```

2. **Configure environment variables:**
  - Copy `.env.example` to `.env` and update as needed.

3. **Run the server:**
  ```bash
  npm start
  ```

## Key Concepts

- **Express.js**: Web framework for Node.js.
- **Joi**: Library for validating request data.

## Next Steps

- Explore the files in `src/` to understand how controllers, routes, and validators work together.
- Try adding new routes and validation schemas.

## Useful Commands

- `npm run dev` — Start server with auto-reload (if using nodemon).
- `npm test` — Run tests (if available).

---

Happy coding!