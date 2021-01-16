import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import database, { IReq } from "@/middleware/database";

const handler = nextConnect();

handler.use(database);

interface IData {
  userExists: boolean;
}

handler.get(async (req: IReq, res: NextApiResponse<IData | string>) => {
  try {
    const user = await req.db
      .collection("users")
      .findOne({ email: req.query.email });

    const userExists = Boolean(user);

    res.json({ userExists });
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

export default handler;
