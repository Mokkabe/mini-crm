export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-sm text-white/70">
        Overview of your CRM activity.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/70">Total leads</p>
          <p className="mt-2 text-3xl font-semibold">128</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/70">New this week</p>
          <p className="mt-2 text-3xl font-semibold">12</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/70">Follow-ups</p>
          <p className="mt-2 text-3xl font-semibold">7</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/70">Conversion</p>
          <p className="mt-2 text-3xl font-semibold">18%</p>
        </div>
      </div>
    </div>
  )
}
