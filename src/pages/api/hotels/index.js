import { connectToDatabase } from '@/lib/mongodb'; // Adjust this import based on your DB setup

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let { city } = req.query;
  city = city.toLowerCase(); // Convert the query parameter to lowercase for consistency

  // Debugging: Log the query parameter
  console.log('Query Parameter - City:', city);

  try {
    // Debugging: Log MongoDB connection attempt
    console.log('Attempting to connect to MongoDB...');

    const { db } = await connectToDatabase(); // Ensure the database name is correct
    const hotelsCollection = db.collection('hotels');

    // Debugging: Log the query being executed
    console.log('Querying hotels for city (case-insensitive):', city);

    // Use a regex to perform a case-insensitive search
    const hotels = await hotelsCollection
      .find({ city: { $regex: new RegExp(`^${city}$`, 'i') } })
      .toArray();

    // Debugging: Log the result
    console.log('Hotels found:', hotels);

    res.status(200).json(hotels);
  } catch (error) {
    // Debugging: Log the error
    console.error('Error in API:', error);

    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
}