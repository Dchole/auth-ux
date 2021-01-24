import { NextApiRequest, NextApiResponse } from "next";
import storageBucket from "@/lib/storage-bucket";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const userID = req.query.id as string;

    const file = storageBucket.file(`${userID}.jpg`);
    res.send(file);
  } catch (error) {
    console.log(error);
    res.status(500).end("Something went wrong!");
  }
};
