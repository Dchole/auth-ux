import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import { genSalt, hash } from "bcryptjs";
import database, { IReq } from "@/middleware/database";
import validation, { IError } from "@/middleware/validation";
import { getTokenCookie, setTokenCookie } from "@/utils/auth-cookie";
import { verify } from "jsonwebtoken";
import { createAccessToken, createRefreshToken } from "@/utils/createToken";

const handler = nextConnect();

handler.use(database);

interface IData {
  accessToken: string;
}

handler.post(async (req: IReq, res: NextApiResponse<IData | string>) => {
  try {
    const oneTime = Boolean(req.body.token);

    const refreshToken = req.body.token || getTokenCookie(req);
    if (!refreshToken) return res.status(400).end("Invalid Token");

    const payload: any = verify(refreshToken, process.env.REFRESH_SECRET);
    if (!payload) return res.status(400).end("Invalid Token");

    const accessToken = createAccessToken(payload.id);
    !oneTime && setTokenCookie(res, createRefreshToken(payload.id));

    res.json({ accessToken });
  } catch (err) {
    console.log(err);
    res.status(500).end("Something went wrong");
  }
});

export default handler;
