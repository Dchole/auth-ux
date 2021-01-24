import { removeTokenCookie } from "@/utils/auth-cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  removeTokenCookie(res);
};
