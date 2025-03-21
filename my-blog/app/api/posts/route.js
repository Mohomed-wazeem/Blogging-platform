import connectMongo from "../../../utils/connectMongo";
import PostModel from "../../../models/postModel";

export async function GET(req) {
  const query = req.nextUrl.searchParams.get('q'); // Retrieve search query

  try {
    await connectMongo(); 
    let posts;

    if (query) {
      // Search for blogs by title or description (case-insensitive)
      posts = await PostModel.find({
        $or: [
          { title: new RegExp(query, 'i') },
          { description: new RegExp(query, 'i') },
        ],
      }).sort({ createdAt: -1 });
    } else {
      posts = await PostModel.find({}).sort({ createdAt: -1 });
    }

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    await connectMongo(); 

    const data = await req.json(); // Parse JSON from the request body
    const newPost = new PostModel(data);

    await newPost.save(); // Save the blog to the database

    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
