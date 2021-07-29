import { MongoClient, Db } from "mongodb";

const MONGODB_URI: any = process.env.MONGODB_URI;
const MONGODB_DB: any = process.env.MONGODB_DB;

interface ConnectType {
  db: Db;
  client: MongoClient;
}

const client = new MongoClient(MONGODB_URI);

export default async function connect(): Promise<ConnectType> {
  await client.connect();
  const db = client.db(MONGODB_DB);
  return { db, client };
}
