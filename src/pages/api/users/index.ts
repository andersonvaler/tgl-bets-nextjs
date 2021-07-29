import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../util/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    const { db } = await connect();
    switch (method) {
      case "GET":
        const data = await db.collection("users").find().toArray();

        res.status(200).json(data);
        break;
      case "POST":
        const newuser = await db.collection("users").insertOne(req.body);

        res.status(200).json(newuser);
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
