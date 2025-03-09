import clientPromise from '../../../../lib/mongodb';
import isAdmin from '../../../../middleware/isAdmin';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Apply admin middleware
  await isAdmin(req, res, async () => {
    const { id } = req.query;
    const { name, city, address, description, pricePerNight, amenities, images } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db('your-db-name');
      const hotelsCollection = db.collection('hotels');

      const updatedHotel = {
        name,
        city,
        address,
        description,
        pricePerNight,
        amenities,
        images,
        updatedAt: new Date(),
      };

      await hotelsCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedHotel });
      res.status(200).json({ message: 'Hotel updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  });
}