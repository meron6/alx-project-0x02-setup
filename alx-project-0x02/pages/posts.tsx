import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-6">
        <h1 className="text-4xl font-bold text-green-600">Posts Page</h1>
        <p className="text-lg text-gray-700">
          This is where posts will be displayed once we implement API integration.
        </p>
      </main>
    </>
  );
}

