import connectMongo from "../../../utils/connectMongo";
import Blog from "../../../models/Blog";

export async function GET(req) {
  const query = req.nextUrl.searchParams.get('q'); 

  try {
    await connectMongo(); 
    let blogs;

    if (query) {
      blogs = await Blog.find({
        $or: [
          { title: new RegExp(query, 'i') },
          { description: new RegExp(query, 'i') },
        ],
      }).sort({ createdAt: -1 });
    } else {
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
    await connectMongo(); 

    const data = await req.json(); 
    const newBlog = new Blog(data);

    await newBlog.save(); 

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

