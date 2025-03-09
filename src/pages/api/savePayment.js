// pages/api/savePayment.js
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
      const result = await db.collection('payments').insertOne({
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

      res.status(200).json({ message: 'Payment details saved successfully', result });
    } catch (error) {
      console.error('Error saving payment details:', error);
      res.status(500).json({ message: 'Failed to save payment details' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}