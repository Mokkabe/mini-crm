import { NavLink, Outlet } from 'react-router-dom'

const baseLink =
  'rounded px-3 py-2 text-sm transtition hover:bg"-white/10'

export default function Layout() 
{
    return(
        <div className="min-h-screen bg-neutral-950 text-white">
            <header className="border-b border-white/10">
            <div className="mx-auto flex max-w-5x1 items-center justify-between  px-6 py-4">
                <span className="font-semibold">mini-crm</span>
                
                <nav className="flex gap-2">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? "bg-white/10" : ""}`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? "bg-white/10" : ""}`
                        }
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/leads"
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? "bg-white/10" : ""}`
                        }
                    >
                        Leads
                    </NavLink>
                    <NavLink
                        to="/signin"
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? "bg-white/10" : ""}`
                        }
                    >
                        Sign In
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? "bg-white/10" : ""}`
                        }
                    >
                        Sign Up
                    </NavLink>
                </nav>
            </div>
            </header> 

            <main className="mx-auto max-w-5xl py-10">
                <Outlet />
            </main>
        </div>
    )
}