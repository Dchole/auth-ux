import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import database, { IReq } from "@/middleware/database";
import { ObjectID } from "mongodb";
import getUserID from "@/utils/get-userID";
import { compare, genSalt, hash } from "bcryptjs";

const handler = nextConnect();

handler.use(database);

handler.put(async (req: IReq, res: NextApiResponse) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const userID = getUserID(token);
    if (!userID) return res.status(401).end("Unauthorized!");

    const user = await req.db
      .collection("users")
      .findOne({ _id: new ObjectID(userID) }, { projection: { password: 1 } });

    if (!user) return res.status(400).end("Unauthorized");

    const validPassword = await compare(req.body.current, user.password);

    if (!validPassword) {
      return res.json({ message: "Password Incorrect!", key: "current" });
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(req.body.new, salt);

    const { result } = await req.db
      .collection("users")
      .updateOne(
        { _id: new ObjectID(userID) },
        { $set: { password: hashedPassword } }
      );

    res.json(result);
  } catch (error) {
    res.status(500).end("Something went wrong");
  }
});

export default handler;
