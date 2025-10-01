import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-6">
      <h1 className="text-4xl font-bold text-green-600">Home Page</h1>
      <p className="text-lg text-gray-700">
        Welcome to the Home page of the SoloForge project.
      </p>

      <Card title="First Card" content="This is the content of the first card." />
      <Card title="Second Card" content="This is the content of the second card." />
    </main>
  );
}
