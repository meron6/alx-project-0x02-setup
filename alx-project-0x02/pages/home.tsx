import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-6 p-6">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to the Home Page</h1>
        <Card
          title="Home Card"
          description="This is a sample card on the Home page."
          content="Cards are reusable UI components."
        />
      </main>
    </>
  );
}
