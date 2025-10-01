import React, { useState } from "react";

interface PostModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ title, isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", inputValue);
    setInputValue("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter something..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;

