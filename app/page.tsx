export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1 text-sm font-medium text-zinc-700">
            AccentLift • American English Speaking Coach
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Speak clearer, sound more natural, and build real confidence in American English.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            AccentLift helps learners improve pronunciation, rhythm, clarity, and speaking confidence
            with guided practice, AI feedback, live conversation sessions, and progress tracking.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
              Start Assessment
            </button>
            <button className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50">
              View Demo Plan
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-lg font-semibold text-zinc-950">Baseline Assessment</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Measure pronunciation, fluency, vocabulary, and confidence to create a starting point.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-lg font-semibold text-zinc-950">Live Conversation</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Practice realistic speaking sessions with guided prompts and AI-based coaching feedback.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-lg font-semibold text-zinc-950">Progress Tracking</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Follow daily practice, weekly reports, and improvement over time in one dashboard.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
