import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import database, { IReq } from "@/middleware/database";
import { ObjectID } from "mongodb";
import getUserID from "@/utils/get-userID";

const handler = nextConnect();

handler.use(database);

handler.get(async (req: IReq, res: NextApiResponse) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const userID = getUserID(token);
    if (!userID) return res.status(401).end("Unauthorized!");

    const user = await req.db
      .collection("users")
      .findOne({ _id: new ObjectID(userID) }, { projection: { password: 0 } });

    if (!user) return res.status(400).end("User not found");

    res.json(user);
  } catch (error) {
    res.status(500).end("Something went wrong");
  }
});

export default handler;
