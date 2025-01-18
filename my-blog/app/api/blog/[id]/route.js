import connectMongo from "../../../../utils/connectMongo";
import Blog from "../../../../models/Blog";

export async function GET(req) {
    const id = req.nextUrl.pathname.split('/').pop(); // Extracting the blog ID

    try {
        // Connecting to MongoDB
        await connectMongo();
        console.log("Connected to MongoDB");

        // Fetching the blog details based on the ID
        const blogData = await Blog.findOne({ _id: id });

        if (!blogData) {
            return new Response(JSON.stringify({ message: "Blog not found" }), { status: 404 });
        }

        // Fetch related blogs based on category (or another field)
        const relatedBlogs = await Blog.find({ category: blogData.category }).limit(3); // Limit to 3 related blogs

        // Return the blog data and related blogs as JSON
        return new Response(
            JSON.stringify({ blog: blogData, relatedBlogs }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}
