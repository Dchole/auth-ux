import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { getTokenCookie, setTokenCookie } from "@/utils/auth-cookie";
import { verify } from "jsonwebtoken";
import { createAccessToken, createRefreshToken } from "@/utils/createToken";

const handler = nextConnect();

interface IData {
  accessToken: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<IData | string>
) => {
  if (req.method === "POST") {
    try {
      // If refresh-token is sent from the front-end,
      // it means user signed in for one-time authentication
      const oneTime = Boolean(req.body.token);

      const refreshToken = req.body.token || getTokenCookie(req);
      if (!refreshToken) return res.status(401).end("Invalid Token");

      const payload: any = verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      if (!payload) return res.status(403).end("Invalid Token");

      const accessToken = createAccessToken(payload.id);
      !oneTime && setTokenCookie(res, createRefreshToken(payload.id));

      res.json({ accessToken });
    } catch (err) {
      console.log(err);
      res.status(500).end("Something went wrong");
    }
  }
};
