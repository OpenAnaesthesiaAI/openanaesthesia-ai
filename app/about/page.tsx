import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white text-gray-800">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        OpenAnaesthesia AI
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-2xl mb-8">
        Evidence-based answers for real-world anaesthesia.
      </p>

      <nav className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
        <Link
          href="/about"
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
        >
          About
        </Link>
        <Link
          href="/how-it-works"
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
        >
          How it works
        </Link>
        <Link
          href="/sources"
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
        >
          Sources
        </Link>
        <Link
          href="/faqs"
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
        >
          FAQs
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
        >
          Contact
        </Link>
      </nav>
    </main>
  );
}
