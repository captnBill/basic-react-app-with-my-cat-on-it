import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-white">Look at my cat:</h1>
      <img
        src="/img/cat.jpg"
        alt="My cat"
        width={400}
        height={400}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
} 