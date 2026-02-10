import { useState } from "react"

export default function Leads() {
  const [leads, setLeads] = useState<string[]>([])
  const [name, setName] = useState("")

  function addLead(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name.trim()) return
    setLeads((prev) => [...prev, name])
    setName("")
  }

  return (
    <div className="p-10 max-w-xl">
      <h1 className="text-3xl font-semibold mb-6">Leads</h1>

      <form onSubmit={addLead} className="flex gap-2 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Lead name"
          className="flex-1 rounded-md border border-white/10 bg-black/30 px-3 py-2"
        />
        <button className="rounded-md bg-white px-4 py-2 text-black">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {leads.map((lead, i) => (
          <li
            key={i}
            className="rounded-md border border-white/10 bg-white/5 px-3 py-2"
          >
            {lead}
          </li>
        ))}
      </ul>
    </div>
  )
}
