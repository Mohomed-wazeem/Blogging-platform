import connectMongo from "../../../../utils/connectMongo";
import Blog from "../../../../models/Blog";

export async function GET(req) {
    const id = req.nextUrl.pathname.split('/').pop(); 

    try {
        // Connecting to MongoDB
        await connectMongo();
        console.log("Connected to MongoDB");

        const blogData = await Blog.findOne({ _id: id });

        if (!blogData) {
            return new Response(JSON.stringify({ message: "Blog not found" }), { status: 404 });
        }

        const relatedBlogs = await Blog.find({ category: blogData.category }).limit(3); 

        return new Response(
            JSON.stringify({ blog: blogData, relatedBlogs }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}
