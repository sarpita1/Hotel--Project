import { connectToDatabase } from '@/lib/mongodb';
import multer from 'multer';
import fs from 'fs';

// Configure multer for file upload
const upload = multer({ dest: 'uploads/' });

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Use multer to handle multiple file uploads
    upload.array('images', 5)(req, res, async (err) => { // Allow up to 5 images
      try {
        if (err) {
          console.error("Multer error:", err);
          return res.status(500).json({ message: "File upload failed", error: err.message });
        }

        // Extract form data from the request body
        const { name, city, address, description, pricePerNight, amenities,roomsAvailable } = req.body;
        const imageFiles = req.files; // Array of uploaded files

        // Validate required fields
        if (!name || !city || !address || !description || !pricePerNight || !amenities || !imageFiles) {
          return res.status(400).json({ message: "All fields are required" });
        }

        const { db } = await connectToDatabase();
        const propertyCollection = db.collection("properties");

        // Read each image file and convert it to base64
        const imagesBase64 = imageFiles.map((file) => {
          const imageBuffer = fs.readFileSync(file.path);
          const base64 = imageBuffer.toString('base64');
          fs.unlinkSync(file.path); // Delete the temporary file
          return base64;
        });

        // Insert property data into MongoDB
        const result = await propertyCollection.insertOne({
          name,
          city,
          address,
          description,
          pricePerNight: parseFloat(pricePerNight),
          roomsAvailable,
          totalrooms:roomsAvailable,
          amenities: JSON.parse(amenities),
          images: imagesBase64, // Store images as an array of base64 strings
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        // Fetch the inserted document using the insertedId
        const insertedProperty = await propertyCollection.findOne({
          _id: result.insertedId,
        });

        // Send success response
        res.status(201).json({ message: "Property listed successfully!", property: insertedProperty });
      } catch (error) {
        console.error("Error in API handler:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}