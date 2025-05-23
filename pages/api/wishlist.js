import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { database } = await connectToDatabase();
  const db = database;

  if (req.method === "POST") {
    const { name, capital, flags } = req.body;
    await db.collection("wishlist").insertOne({
      name: name.common,
      capital: capital[0],
      flag: flags.png,
    });
    return res.status(200).json({ message: "Țara a fost salvată!" });
  }

  if (req.method === "GET") {
    const data = await db.collection("wishlist").find().toArray();
    return res.status(200).json(data);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    const result = await db.collection("wishlist").deleteOne({
      _id: new ObjectId(id),
    });
    return res.status(200).json(result);
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
