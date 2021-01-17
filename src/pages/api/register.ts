import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import { genSalt, hash } from "bcryptjs";
import database, { IReq } from "@/middleware/database";
import validation, { IError } from "@/middleware/validation";

const handler = nextConnect();

handler.use(database);
handler.use(validation);

handler.post(async (req: IReq, res: NextApiResponse<IError | string>) => {
  try {
    const user = await req.db
      .collection("users")
      .findOne({ email: req.body.email });

    if (user)
      return res
        .status(400)
        .json({ message: "Email already taken", key: "email" });

    const salt = await genSalt(10);
    const hashedPassword = await hash(req.body.password, salt);

    await req.db.collection("users").insertOne({
      email: req.body.email,
      password: hashedPassword
    });

    res.send("Registration successful");
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

export default handler;
