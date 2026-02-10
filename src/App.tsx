import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'

function Landing() {
  return <div className="p-10 text-white">Landing Page</div>
}

function SignIn() {
  return <div className="p-10 text-white">Sign In</div>
}

function SignUp() {
  return <div className="p-10 text-white">Sign Up</div>
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
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leads" element={<Leads />} />
    </Routes>
  )
}
