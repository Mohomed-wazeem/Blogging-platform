import connectMongo from "../../../utils/connectMongo";
import PostModel from "../../../models/postModel";

export async function GET(req) {
  const query = req.nextUrl.searchParams.get('q');

  try {
    await connectMongo(); 
    let posts;

    if (query) {
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

    const data = await req.json(); 
    const newPost = new PostModel(data);

    await newPost.save(); 

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
