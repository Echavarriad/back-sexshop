import dotenv from "dotenv";
import { createPool } from "mysql2/promise";

dotenv.config();

export const pool = createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});
