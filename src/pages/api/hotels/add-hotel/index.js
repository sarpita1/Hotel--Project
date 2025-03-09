import { connectToDatabase } from '@/lib/mongodb'; // Adjust this import based on your DB setup

export default async function handler(req, res) {
    console.log("req.method", req)
  if (req.method === "POST") {
    const { name, city, address, description, pricePerNight, amenities, images } = req.body;

   const { db } = await connectToDatabase();
   
    const propertyCollection = db.collection("properties");

    const result = await propertyCollection.insertOne({
      name,
      city,
      address,
      description,
      pricePerNight: parseFloat(pricePerNight),
      amenities: JSON.parse(amenities),
      images,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    client.close();

    res.status(201).json({ message: "Property listed successfully!", property: result.ops[0] });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}