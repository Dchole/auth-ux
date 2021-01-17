import { sign } from "jsonwebtoken";

export interface IPayload {
  uid: string;
}

export const createAccessToken = (payload: IPayload) =>
  sign(payload, process.env.JWT_SECRET, { expiresIn: "10m" });

export const createRefreshToken = (payload: IPayload) =>
  sign(payload, process.env.REFRESH_SECRET, { expiresIn: "7d" });
