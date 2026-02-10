import { NavLink, Outlet } from "react-router-dom";

const navLink =
  "rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white";

export default function Layout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">mini-crm</span>

          <nav className="flex items-center gap-2">
            <NavLink to="/" end className={navLink}>
              Home
            </NavLink>
            <NavLink to="/dashboard" className={navLink}>
              Dashboard
            </NavLink>
            <NavLink to="/leads" className={navLink}>
              Leads
            </NavLink>
            <NavLink to="/signin" className={navLink}>
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="ml-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-black hover:bg-white/90"
            >
              Sign Up
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
