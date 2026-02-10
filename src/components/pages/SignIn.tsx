export default function SignIn() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Sign in</h1>
        <p className="mt-2 text-sm text-white/70">
          Welcome back. Please enter your details.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-white/80">Email</label>
            <input
              className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-white/20"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-white/20"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90">
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}
