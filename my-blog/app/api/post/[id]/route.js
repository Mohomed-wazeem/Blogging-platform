import connectMongo from "../../../../utils/connectMongo";
import PostModel from "../../../../models/postModel";

export async function GET(req) {
    const id = req.nextUrl.pathname.split('/').pop(); 

    try {
        await connectMongo();
        console.log("Connected to MongoDB");

        const postData = await PostModel.findOne({_id: id});

        if (!postData) {
            return new Response(JSON.stringify({message: "Post not found"}), { status: 404 });
        }

        return new Response(JSON.stringify(postData));
    } catch (error) {
        console.error("Error:", error);
        return new Response(JSON.stringify({message: error.message}), { status: 500 });
    }
}
