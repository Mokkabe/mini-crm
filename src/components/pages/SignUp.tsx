export default function SignUp() {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-semibold tracking-tight">Sign up</h1>
      <p className="mt-2 text-sm text-white/70">
        Create your account to start managing leads.
      </p>

      <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
        <label className="block text-sm text-white/80">Name</label>
        <input
          className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-white/20"
          placeholder="Sandra"
        />

        <label className="mt-4 block text-sm text-white/80">Email</label>
        <input
          className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-white/20"
          placeholder="you@example.com"
        />

        <label className="mt-4 block text-sm text-white/80">Password</label>
        <input
          type="password"
          className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-white/20"
          placeholder="••••••••"
        />

        <label className="mt-4 block text-sm text-white/80">
          Confirm password
        </label>
        <input
          type="password"
          className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:border-white/20"
          placeholder="••••••••"
        />

        <button className="mt-6 w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90">
          Create account
        </button>

        <p className="mt-4 text-center text-sm text-white/60">
          Already have an account?{" "}
          <a className="text-white underline underline-offset-4" href="/signin">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}
