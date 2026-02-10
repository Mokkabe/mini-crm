import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

import SignIn from "./components/pages/SignIn"
import SignUp from "./components/pages/SignUp"

function Landing() {
  return <div className="p-10 text-white">Landing Page</div>
}

function Dashboard() {
  return <div className="p-10 text-white">Dashboard</div>
}

function Leads() {
  return <div className="p-10 text-white">Leads</div>
}

export default function App() {
  return (
    <Routes>
      {/* Layout umschließt ALLE Seiten */}
      <Route element={<Layout />}>

        {/* "/" → Landing Page */}
        <Route index element={<Landing />} />

        {/* Auth */}
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />

        {/* App */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="leads" element={<Leads />} />

      </Route>
    </Routes>
  )
}
