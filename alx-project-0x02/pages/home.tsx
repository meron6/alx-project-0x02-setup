import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-6">
      <h1 className="text-4xl font-bold text-green-600">Home Page</h1>
      <p className="text-lg text-gray-700">
        Welcome to the Home page of the SoloForge project.
      </p>

      <Card title="First Card" content="This is the content of the first card." />
      <Card title="Second Card" content="This is the content of the second card." />

      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Open Modal
      </button>

      <PostModal
        title="Example Modal"
        content="This is some example modal content."
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  );
}
