import { useEffect, useState } from "react"

type Lead = { id: number; name: string; email: string }

const API_BASE = "http://localhost:5097" // Port ggf. anpassen

export default function Leads() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)

        console.log("API_BASE:", API_BASE)

        const res = await fetch(`${API_BASE}/api/leads`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const data = (await res.json()) as Lead[]
        setLeads(data)
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return (
    <div className="p-10 max-w-xl">
      <h1 className="text-3xl font-semibold mb-6">Leads</h1>

      {loading && <p className="text-white/70">Loading…</p>}
      {error && <p className="text-red-300">Error: {error}</p>}

      {!loading && !error && (
        <ul className="space-y-2">
          {leads.map((lead) => (
            <li key={lead.id} className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
              <div className="font-medium">{lead.name}</div>
              <div className="text-sm text-white/70">{lead.email}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
