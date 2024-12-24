import connectMongo from "../../../utils/connectMongo";
import PostModel from "../../../models/postModel";

export async function GET(req) {
    const query = req.nextUrl.searchParams.get('q');
    console.log(query,'query')

    try{
        await connectMongo();
        if(query){
            const postData = await PostModel.find({
                $or : [
                    {title: mew RegExp(query)}
                ]
            });
        }
        const postData = await PostModel.find({});
        return Response.json(postData);
    }
    catch(error){
         return Response.json({message: error.message})
    }
}