import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm text-white/70">Mini CRM — Setup</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
          Manage leads. Stay organized. Close more deals.
        </h1>
        <p className="mt-4 text-white/70">
          A lightweight CRM for freelancers: track leads, follow up, and keep your pipeline clean.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/signup"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
          >
            Create account
          </Link>
          <Link
            to="/signin"
            className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Sign in
          </Link>
        </div>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="font-medium text-white">Leads</h3>
          <p className="mt-2 text-sm text-white/70">
            Collect and manage your contacts in one place.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="font-medium text-white">Pipeline</h3>
          <p className="mt-2 text-sm text-white/70">
            Keep an overview of next steps and follow-ups.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="font-medium text-white">Insights</h3>
          <p className="mt-2 text-sm text-white/70">
            See what’s happening at a glance on the dashboard.
          </p>
        </div>
      </div>
    </div>
  )
}
