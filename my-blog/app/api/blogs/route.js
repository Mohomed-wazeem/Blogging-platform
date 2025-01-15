import connectMongo from "../../../utils/connectMongo";
import Blog from "../../../models/Blog";

//  Handle GET and POST methods
export async function GET(req) {
  const query = req.nextUrl.searchParams.get('q'); // Retrieve search query

  try {
    await connectMongo(); // Connect to MongoDB
    let blogs;

    if (query) {
      // Search for blogs by title or description (case-insensitive)
      blogs = await Blog.find({
        $or: [
          { title: new RegExp(query, 'i') },
          { description: new RegExp(query, 'i') },
        ],
      }).sort({ createdAt: -1 });
    } else {
      // Fetch all blogs sorted by creation date (descending)
      blogs = await Blog.find({}).sort({ createdAt: -1 });
    }

    return new Response(JSON.stringify({ success: true, blogs }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    await connectMongo(); // Connect to MongoDB

    const data = await req.json(); // Parse JSON from the request body
    const newBlog = new Blog(data);

    await newBlog.save(); // Save the blog to the database

    return new Response(JSON.stringify({ success: true, blog: newBlog }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

