import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import database, { IReq } from "@/middleware/database";
import { ObjectID } from "mongodb";
import { createAccessToken, createRefreshToken } from "@/utils/createToken";
import { setTokenCookie } from "@/utils/auth-cookie";

const handler = nextConnect();

interface IData {
  accessToken: string;
}

handler.use(database);

handler.post(async (req: IReq, res: NextApiResponse<IData | string>) => {
  try {
    let userID: string;

    const user = await req.db
      .collection("users")
      .findOne({ email: req.body.email });

    if (!user) {
      const { ops } = await req.db.collection("users").insertOne({
        _id: new ObjectID(),
        email: req.body.email,
        name: req.body.displayName,
        bio: "",
        photo: req.body.photoURL,
        phone: req.body.phoneNumber || ""
      });

      userID = ops[0]._id;
    } else {
      userID = user._id;
    }

    const accessToken = createAccessToken(userID);
    const refreshToken = createRefreshToken(userID);

    setTokenCookie(res, refreshToken);

    res.json({ accessToken });
  } catch (error) {
    console.log(error.message);
    res.status(500).end("Something went wrong");
  }
});

export default handler;
