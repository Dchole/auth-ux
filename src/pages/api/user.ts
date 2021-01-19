import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import { compare } from "bcryptjs";
import database, { IReq } from "@/middleware/database";
import { createAccessToken, createRefreshToken } from "@/utils/createToken";
import { setTokenCookie } from "@/utils/auth-cookie";
import { ObjectId } from "mongodb";
import getUserID from "@/utils/get-userID";

const handler = nextConnect();

handler.use(database);

handler.get(async (req: IReq, res: NextApiResponse) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const userID = getUserID(token);

    const user = await req.db
      .collection("users")
      .findOne({ _id: new ObjectId(userID) });

    if (!user) return res.status(400).end("User not found");

    res.json(user);
  } catch (error) {
    res.status(500).end("Something went wrong");
  }
});

export default handler;
