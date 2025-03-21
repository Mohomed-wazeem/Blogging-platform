import connectMongo from "../../../utils/connectMongo";
import Blog from '../../../models/Blog';

export async function POST(req) {
    try {
        // Extract data from the incoming request
        const { title, description, image } = await req.json();

        const newBlog = {
            title,
            description,
            image,
        };

        await connectMongo();

        // Save the blog to the database
        await Blog.create(newBlog);

        return Response.json({ message: 'Blog has been created successfully!' });
    } catch (error) {
        return Response.json({ message: error.message });
    }
}
