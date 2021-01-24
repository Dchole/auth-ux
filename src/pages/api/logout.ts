import { removeTokenCookie } from "@/utils/auth-cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  removeTokenCookie(res);
  res.end();
};
