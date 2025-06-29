import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center gap-6">
      <h1 className="text-4xl font-bold">OpenAnaesthesia AI</h1>
      <p className="text-lg max-w-xl">
        Evidence-based answers for real-world anaesthesia.
      </p>
      <nav className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link
          href="/about"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          About
        </Link>
        <Link
          href="/sources"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Sources
        </Link>
        <Link
          href="/ask"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Ask a Question
        </Link>
      </nav>
    </main>
  );
}