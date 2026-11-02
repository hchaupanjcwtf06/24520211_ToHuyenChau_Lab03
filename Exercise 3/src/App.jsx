
import { useState } from 'react'
import {
  PubgMatchTelemetry,
  SquadSelector,
} from './components/PubgMatchTelemetry.jsx'

export default function App() {
  const [selectedSquadId, setSelectedSquadId] = useState('te')

  return (
    <main>
      <header>
        <h1>KRAFTON PUBG Vietnam Series</h1>
        <p>Simulated Live Match Telemetry Radar</p>
      </header>

      <SquadSelector
        selectedId={selectedSquadId}
        onSelect={setSelectedSquadId}
      />

      <PubgMatchTelemetry squadId={selectedSquadId} />
    </main>
  )
}
