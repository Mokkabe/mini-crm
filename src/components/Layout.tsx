import { NavLink, Outlet } from "react-router-dom"

const baseLink =
  "rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"

export default function Layout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">mini-crm</span>

          <nav className="flex items-center gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${baseLink} ${isActive ? "bg-white/10 text-white" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? "bg-white/10 text-white" : ""}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/leads"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? "bg-white/10 text-white" : ""}`
              }
            >
              Leads
            </NavLink>

            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? "bg-white/10 text-white" : ""}`
              }
            >
              Sign In
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `ml-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-white/90 ${
                  isActive ? "bg-white text-black" : "bg-white text-black"
                }`
              }
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
  )
}
