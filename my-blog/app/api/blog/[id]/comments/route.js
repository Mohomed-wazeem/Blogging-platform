import { NextResponse } from "next/server";
import connectMongo from "@/utils/connectMongo";
import Blog from "@/models/Blog";

export async function GET(req, { params }) {
  try {
    await connectMongo();
    const blog = await Blog.findById(params.id);
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog.comments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch comments" }, { status: 500 });
  }
}

export async function POST(req, { params }) {
  try {
    const { author, content } = await req.json();
    if (!author || !content) {
      return NextResponse.json({ message: "Author and content are required" }, { status: 400 });
    }

    await connectMongo();
    const blog = await Blog.findById(params.id);
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    blog.comments.push({ author, content });
    await blog.save();

    return NextResponse.json({ message: "Comment added successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
