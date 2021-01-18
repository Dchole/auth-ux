import { sign } from "jsonwebtoken";

export const createAccessToken = (id: string) =>
  sign({ id }, process.env.JWT_ACCESS_SECRET, { expiresIn: "10m" });

export const createRefreshToken = (id: string) =>
  sign({ id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
