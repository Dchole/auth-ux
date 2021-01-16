import { Db, MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export interface IReq extends NextApiRequest {
  dbClient: MongoClient;
  db: Db;
}

async function database(req: IReq, _res: NextApiResponse, next: any) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("MCT");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
