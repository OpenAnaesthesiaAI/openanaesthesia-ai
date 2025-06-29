export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          OpenAnaesthesia AI
        </h1>
        <p className="text-xl mb-4 text-gray-300">
          A free AI revision assistant for anaesthetists, based on trusted UK sources
          like <strong>BJA Education</strong>, <strong>NAP reports</strong>, and <strong>RCOA guidelines</strong>.
        </p>
        <div className="mt-8">
          <a
            href="https://github.com/OpenAnaesthesiaAI/openanaesthesia-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}