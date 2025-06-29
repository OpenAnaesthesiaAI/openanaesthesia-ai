export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">OpenAnaesthesia AI</h1>
      <p className="text-lg text-gray-600 mb-8">
        Evidence-based answers for real-world anaesthesia.
      </p>
      <nav className="flex flex-wrap justify-center gap-4">
        <a href="/about" className="text-blue-600 hover:underline">About</a>
        <a href="/sources" className="text-blue-600 hover:underline">Sources</a>
        <a href="/how-it-works" className="text-blue-600 hover:underline">How it works</a>
        {/* Add more links here as needed */}
      </nav>
    </main>
  );
}
