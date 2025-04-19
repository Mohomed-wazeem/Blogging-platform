'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, image }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setTitle('');
        setDescription('');
        setImage('');
        router.push('/');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong! Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Write a Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter the blog title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Write your blog description"
              rows="4"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter image URL"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;
