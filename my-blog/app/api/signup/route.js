import bcrypt from "bcryptjs";
import connectMongo from "@/utils/connectMongo";
import User from "@/models/userModel";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    await connectMongo();

    const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "User already exists. Please sign in." }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });
    // const hashedPassword = await(password, 10);

    // const newUser = new User({
    //   name,
    //   email: email.toLowerCase().trim(),
    //   password,
    // });

    await newUser.save();

    return new Response(
      JSON.stringify({ message: "Signup successful!" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || "Server error" }),
      { status: 500 }
    );
  }
}
