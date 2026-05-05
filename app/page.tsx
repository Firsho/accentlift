export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-border bg-accent px-4 py-1 text-sm font-medium text-primary">
            AccentLift • American English Speaking Coach
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Speak clearer, sound more natural, and build real confidence in American English.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            AccentLift helps learners improve pronunciation, rhythm, clarity, and speaking confidence
            with guided practice, AI feedback, live conversation sessions, and progress tracking.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
              Start Assessment
            </button>
            <button className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent">
              View Demo Plan
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Baseline Assessment</h2>
            <p className="mt-2 text-sm leading-7 text-muted">
              Measure pronunciation, fluency, vocabulary, and confidence to create a starting point.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Live Conversation</h2>
            <p className="mt-2 text-sm leading-7 text-muted">
              Practice realistic speaking sessions with guided prompts and AI-based coaching feedback.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Progress Tracking</h2>
            <p className="mt-2 text-sm leading-7 text-muted">
              Follow daily practice, weekly reports, and improvement over time in one dashboard.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
