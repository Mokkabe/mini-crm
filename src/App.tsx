export default function App() {
  return (
    <div className="min-h-screen bg-[#05050c] text-white">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          Mini CRM – Setup ready
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
          Mini CRM <span className="text-white/60">(React + TS + Tailwind)</span>
        </h1>

        <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
          Building a lightweight CRM for freelancers with modern UI and clean architecture.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Feature title="Auth" desc="Secure sign in & sessions" />
          <Feature title="Leads" desc="Pipeline with filters & follow-ups" />
          <Feature title="Dashboard" desc="KPIs & insights" />
        </div>
      </div>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-white/65">{desc}</div>
    </div>
  );
}
