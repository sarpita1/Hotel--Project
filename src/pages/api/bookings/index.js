import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userId, hotelId, checkInDate, checkOutDate, totalPrice } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db('your-db-name');
    const bookingsCollection = db.collection('bookings');

    const newBooking = {
      user: userId,
      hotel: hotelId,
      checkInDate: new Date(checkInDate),
      checkOutDate: new Date(checkOutDate),
      totalPrice,
      status: 'confirmed',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await bookingsCollection.insertOne(newBooking);
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
}