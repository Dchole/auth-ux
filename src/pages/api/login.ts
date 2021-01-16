import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import database, { IReq } from "@/middleware/database";

const handler = nextConnect();

handler.use(database);

handler.post(async (req: IReq, res: NextApiResponse) => {
  try {
    const doc = await req.db
      .collection("users")
      .insertOne({ email: req.body.email });

    res.json(doc);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

export default handler;
