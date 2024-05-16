import { pool } from "../Config/DB.js";

export const indexuser = async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 AS result");
  return res.json(result[0]);
};

export const createuser = async (req, res) => {};

export const updateuser = async (req, res) => {};

export const deleteuser = async (req, res) => {};
