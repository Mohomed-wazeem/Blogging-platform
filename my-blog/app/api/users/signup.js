import bcrypt from 'bcryptjs';
import connectMongo from '../../../utils/connectMongo';
import User from '../../../models/userModel';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');
  
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await connectMongo();
    
    // Check if user already exists by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    // Catch duplicate key errors
    if (error.code === 11000) {
      return res.status(400).json({ error: 'User with this name or email already exists' });
    }
    res.status(500).json({ error: error.message });
  }
}

