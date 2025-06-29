export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-800 sticky top-0 bg-black z-50">
        <h1 className="text-2xl font-semibold tracking-tight">OpenAnaesthesia AI</h1>
        <div className="space-x-6 text-sm">
          <a href="#" className="hover:text-gray-400 transition">Docs</a>
          <a href="#" className="hover:text-gray-400 transition">About</a>
          <a href="#" className="hover:text-gray-400 transition">GitHub</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          OpenAnaesthesia AI
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          Evidence-based answers for real-world anaesthesia.
        </p>
      </section>
    </main>
  );
}