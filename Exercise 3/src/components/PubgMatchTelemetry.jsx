
import { useEffect, useState } from 'react'
import { PUBG_VN_SQUADS } from '../data/pubgSquads.js'
import { fetchKraftonPubgTelemetry } from '../services/telemetry.js'

const INITIAL_VIEW = {
  status: 'IDLE',
  data: null,
  error: null,
}

export function PubgMatchTelemetry({ squadId = 'te' }) {
  const [request, setRequest] = useState({
    squadId,
    retryTick: 0,
  })

  const [result, setResult] = useState(INITIAL_VIEW)

  const currentRequest =
    request.squadId === squadId
      ? request
      : { squadId, retryTick: 0 }

  const requestKey =
    `${currentRequest.squadId}:${currentRequest.retryTick}`

  const view =
    result.requestKey === requestKey
      ? result
      : { status: 'LOADING', data: null, error: null }

  useEffect(() => {
    const controller = new AbortController()

    fetchKraftonPubgTelemetry(squadId, {
      signal: controller.signal,
    })
      .then((payload) => {
        if (controller.signal.aborted) return

        setResult({
          requestKey,
          status: 'SUCCESS',
          data: payload,
          error: null,
        })
      })
      .catch((error) => {
        if (controller.signal.aborted || error.name === 'AbortError') {
          return
        }

        setResult({
          requestKey,
          status: 'ERROR',
          data: null,
          error: error.message,
        })
      })

    return () => controller.abort()
  }, [squadId, requestKey])

  function handleRetry() {
    setRequest((previous) => ({
      squadId,
      retryTick:
        previous.squadId === squadId
          ? previous.retryTick + 1
          : 1,
    }))
  }

  if (view.status === 'IDLE') {
    return <p role="status">Radar is idle.</p>
  }

  if (view.status === 'LOADING') {
    return (
      <section aria-busy="true" aria-live="polite">
        <p>Syncing KRAFTON Radar...</p>
      </section>
    )
  }

  if (view.status === 'ERROR') {
    return (
      <section role="alert">
        <p>Blue-Zone Link Lost: {view.error}</p>
        <button type="button" onClick={handleRetry}>
          Reconnect Satellite
        </button>
      </section>
    )
  }

  return (
    <article aria-live="polite">
      <h2>{view.data.name}</h2>
      <dl>
        <dt>Map</dt>
        <dd>{view.data.map}</dd>
        <dt>Phase</dt>
        <dd>{view.data.phase}</dd>
        <dt>Alive</dt>
        <dd>{view.data.alive}</dd>
        <dt>Kills</dt>
        <dd>{view.data.kills}</dd>
        <dt>WWCD Probability</dt>
        <dd>{view.data.wwcdProb}</dd>
        <dt>Status</dt>
        <dd>{view.data.status}</dd>
      </dl>
    </article>
  )
}

export function SquadSelector({ selectedId, onSelect }) {
  return (
    <nav aria-label="PUBG squad selection">
      {PUBG_VN_SQUADS.map((squad) => (
        <button
          key={squad.id}
          type="button"
          aria-pressed={selectedId === squad.id}
          onClick={() => onSelect(squad.id)}
        >
          {squad.name}
        </button>
      ))}
    </nav>
  )
}
