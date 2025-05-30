import { connectToDatabase } from '@/lib/mongodb'; // Adjust this import based on your DB setup

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { hotel, checkIn, checkOut, guests, rooms, paymentMethod, upiId, upiProvider, transactionId, amount } = req.body;

    if (!hotel || !transactionId || !amount) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      const { db } = await connectToDatabase();

      // Save payment details to the database
      const paymentResult = await db.collection('payments').insertOne({
        hotel,
        checkIn,
        checkOut,
        guests,
        rooms,
        paymentMethod,
        upiId,
        upiProvider,
        transactionId,
        amount,
        status: 'success',
        createdAt: new Date(),
      });

      // Decrease the number of roomsAvailable in the properties collection
      const propertyCollection = db.collection('properties');
      const propertyUpdateResult = await propertyCollection.updateOne(
        { _id: hotel._id }, // Match the property by its _id
        { $inc: { roomsAvailable: -rooms } } // Decrease roomsAvailable by the number of rooms booked
      );

      if (propertyUpdateResult.modifiedCount === 0) {
        throw new Error('Failed to update roomsAvailable in the properties collection');
      }

      res.status(200).json({ message: 'Payment details saved successfully', paymentResult });
    } catch (error) {
      console.error('Error saving payment details:', error);
      res.status(500).json({ message: 'Failed to save payment details', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}