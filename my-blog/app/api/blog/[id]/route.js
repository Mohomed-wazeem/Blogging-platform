import connectMongo from "../../../../utils/connectMongo";
import Blog from "../../../../models/Blog";

export async function GET(req) {
    // Extracting the blog ID from the request URL
    const id = req.nextUrl.pathname.split('/').pop(); 

    try {
        // Connecting to MongoDB
        await connectMongo();
        console.log("Connected to MongoDB");

        // Fetching blog details based on the ID
        const blogData = await Blog.findOne({ _id: id });

        // If no blog is found, return a 404 response
        if (!blogData) {
            return new Response(JSON.stringify({ message: "Blog not found" }), { status: 404 });
        }

        // Return the blog data as JSON
        return new Response(JSON.stringify(blogData), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching blog data:", error);

        // Return an error response in case of failure
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}
