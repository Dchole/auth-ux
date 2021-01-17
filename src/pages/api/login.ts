import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import { compare } from "bcryptjs";
import database, { IReq } from "@/middleware/database";
import validation, { IError } from "@/middleware/validation";
import { createAccessToken, createRefreshToken } from "@/utils/createToken";
import { setTokenCookie } from "@/utils/auth-cookie";

const handler = nextConnect();

interface IData {
  accessToken: string;
  refreshToken?: string;
}

handler.use(database);
handler.use(validation);

handler.post(
  async (req: IReq, res: NextApiResponse<IData | IError | string>) => {
    try {
      const user = await req.db
        .collection("users")
        .findOne({ email: req.body.email });

      if (!user)
        return res
          .status(400)
          .json({ message: "Email does not exist", key: "email" });

      const validPassword = compare(req.body.password, user.password);

      if (!validPassword)
        return res
          .status(400)
          .json({ message: "Password is incorrect", key: "password" });

      const accessToken = createAccessToken({ uid: user._id });
      const refreshToken = createRefreshToken({ uid: user._id });

      if (req.body.remember) {
        setTokenCookie(res, refreshToken);
        res.json({ accessToken });
      } else {
        res.json({ accessToken, refreshToken });
      }
    } catch (error) {
      res.status(500).send("Something went wrong");
    }
  }
);

export default handler;
