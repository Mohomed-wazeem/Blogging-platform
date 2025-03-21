import connectMongo from '../../../../utils/connectMongo';
import Blog from '../../../../models/Blog';

// Handler for POST requests to add a new comment
export async function POST(request, { params }) {
  await connectMongo();

  const { id } = params;
  const { author, content } = await request.json();

  if (!author || !content) {
    return new Response(JSON.stringify({ message: 'Author and content are required' }), { status: 400 });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return new Response(JSON.stringify({ message: 'Blog not found' }), { status: 404 });
    }

    // Add the new comment to the blog's comments array
    blog.comments.push({ author, content });

    // Save the updated blog document
    await blog.save();

    return new Response(JSON.stringify({ message: 'Comment added successfully' }), { status: 201 });
  } catch (error) {
    console.error('Error adding comment:', error);
    return new Response(JSON.stringify({ message: 'Failed to add comment' }), { status: 500 });
  }
}
