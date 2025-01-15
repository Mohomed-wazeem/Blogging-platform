import connectMongo from "../../../utils/connectMongo";
import Blog from '../../../models/Blog';

export async function POST(req) {
    try {
        // Extract data from the incoming request
        const { title, description, image } = await req.json();

        // Create a new blog entry
        const newBlog = {
            title,
            description,
            image,
        };

        // Connect to the MongoDB database
        await connectMongo();

        // Save the blog to the database
        await Blog.create(newBlog);

        // Return a success response
        return Response.json({ message: 'Blog has been created successfully!' });
    } catch (error) {
        // Handle errors and return a failure response
        return Response.json({ message: error.message });
    }
}
