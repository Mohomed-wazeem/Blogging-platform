import bcrypt from "bcryptjs";
import connectMongo from "@/utils/connectMongo";
import User from "@/models/userModel";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email and password are required" }),
        { status: 400 }
      );
    }

    await connectMongo();

    const user = await User.findOne({ email: email.toLowerCase().trim() });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "User not found. Please sign up first." }),
        { status: 404 }
      );
    }

    // Correctly compare the entered password with the hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password." }),
        { status: 401 }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Sign in successful!",
        user: { id: user._id, email: user.email, name: user.name },
        redirect: "/home" // Include the redirection URL
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || "Server error" }),
      { status: 500 }
    );
  }
}
