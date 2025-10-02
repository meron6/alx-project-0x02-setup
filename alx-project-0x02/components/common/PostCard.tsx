// components/common/PostCard.tsx
import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-md shadow-md p-4 mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <span className="text-sm text-gray-500">Posted by User {userId}</span>
    </div>
  );
};

export default PostCard;
