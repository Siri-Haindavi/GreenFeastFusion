import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import au from "./routes/authRoute.js";
import "./db/conn.mjs";
import "./db/seeder.js";
import pr from "./routes/productRoute.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth',au);
app.use('/api/products',pr);

// Global error handling

app.use((_req, _res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});


// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
