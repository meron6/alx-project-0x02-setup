import Button from "@/components/common/Button";

export default function AboutPage() {
  const handleClick = (msg: string) => {
    alert(msg);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-6">
      <h1 className="text-4xl font-bold text-purple-600">About Page</h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        This is the About page for the SoloForge project. Here we demonstrate routing, reusable components, and project structure using Next.js, TypeScript, and Tailwind CSS.
      </p>

      {/* Three Button Variants */}
      <Button
        label="Small Rounded-sm"
        onClick={() => handleClick("Small button clicked!")}
        size="small"
        shape="rounded-sm"
      />
      <Button
        label="Medium Rounded-md"
        onClick={() => handleClick("Medium button clicked!")}
        size="medium"
        shape="rounded-md"
      />
      <Button
        label="Large Rounded-full"
        onClick={() => handleClick("Large button clicked!")}
        size="large"
        shape="rounded-full"
      />
    </main>
  );
}
