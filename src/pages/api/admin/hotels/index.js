import clientPromise from '../../../../lib/mongodb';
import isAdmin from '../../../../middleware/isAdmin';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Apply admin middleware
  await isAdmin(req, res, async () => {
    const { name, city, address, description, pricePerNight, amenities, images } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db('your-db-name');
      const hotelsCollection = db.collection('hotels');

      const newHotel = {
        name,
        city,
        address,
        description,
        pricePerNight,
        amenities,
        images,
        createdBy: req.user._id, // Admin who added the hotel
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await hotelsCollection.insertOne(newHotel);
      res.status(201).json({ message: 'Hotel added successfully', hotel: newHotel });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  });
}