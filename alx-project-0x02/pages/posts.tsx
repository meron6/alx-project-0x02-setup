// pages/posts.tsx
import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      // Map API fields to match PostProps
      const formattedPosts = data.slice(0, 10).map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formattedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </div>
  );
};

export default PostsPage;
