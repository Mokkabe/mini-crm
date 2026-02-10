import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

import Home from "./components/pages/Home"
import SignIn from "./components/pages/SignIn"
import SignUp from "./components/pages/SignUp"
import Dashboard from "./components/pages/Dashboard"
import Leads from "./components/pages/Leads"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Startseite */}
        <Route index element={<Home />} />

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
