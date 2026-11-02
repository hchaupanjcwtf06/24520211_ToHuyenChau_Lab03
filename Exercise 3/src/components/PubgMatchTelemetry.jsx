
import { useEffect, useRef, useState } from 'react'
import { PUBG_VN_SQUADS } from '../data/pubgSquads.js'
import { fetchKraftonPubgTelemetry } from '../services/telemetry.js'
import styles from './PubgMatchTelemetry.module.css'

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
  const statusRef = useRef(null)

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
        if (
          controller.signal.aborted ||
          error.name === 'AbortError'
        ) {
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
    statusRef.current?.focus()

    setRequest((previous) => ({
      squadId,
      retryTick:
        previous.squadId === squadId
          ? previous.retryTick + 1
          : 1,
    }))
  }

  let content

  if (view.status === 'IDLE') {
    content = <p>Radar is idle.</p>
  } else if (view.status === 'LOADING') {
    content = (
      <section
        className={`${styles.panel} ${styles.skeleton}`}
        aria-busy="true"
        aria-label="Loading PUBG match telemetry"
      >
        <p className={styles.loadingText}>
          Syncing KRAFTON Radar...
        </p>

        <div className={styles.skeletonContent} aria-hidden="true">
          <span className={styles.skeletonTitle} />
          <span className={styles.skeletonLine} />
          <span className={styles.skeletonLine} />
          <span className={styles.skeletonShort} />
        </div>
      </section>
    )
  } else if (view.status === 'ERROR') {
    content = (
      <section
        className={`${styles.panel} ${styles.error}`}
        role="alert"
      >
        <h2>Satellite Connection Lost</h2>
        <p>Blue-Zone Link Lost: {view.error}</p>
        <p>
          The telemetry request failed. Reconnect to retrieve
          the latest simulated match data.
        </p>

        <button
          type="button"
          className={styles.retryButton}
          onClick={handleRetry}
        >
          Reconnect Satellite
        </button>
      </section>
    )
  } else {
    content = (
      <article
        className={`${styles.panel} ${styles.telemetry}`}
      >
        <header className={styles.telemetryHeader}>
          <div>
            <p className={styles.eyebrow}>LIVE TELEMETRY</p>
            <h2>{view.data.name}</h2>
            <p className={styles.mapInfo}>
              {view.data.map} / {view.data.phase}
            </p>
          </div>
          <span className={styles.onlineBadge}>
            RADAR ONLINE
          </span>
        </header>

        <dl className={styles.metricsGrid}>
          <div className={styles.metric}>
            <dt>Alive</dt>
            <dd>{view.data.alive}</dd>
          </div>
          <div className={styles.metric}>
            <dt>Kills</dt>
            <dd>{view.data.kills}</dd>
          </div>
          <div className={styles.metric}>
            <dt>WWCD Probability</dt>
            <dd>{view.data.wwcdProb}</dd>
          </div>
        </dl>

        <section
          className={styles.zoneStatus}
          aria-label="Current zone status"
        >
          <h3>Zone Status</h3>
          <p>{view.data.status}</p>
        </section>
      </article>
    )
  }

  return (
    <section aria-label="PUBG telemetry radar">
      <p
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={styles.focusStatus}
      >
        {view.status === 'LOADING'
          ? 'Syncing KRAFTON Radar...'
          : view.status === 'SUCCESS'
            ? `${view.data.name} telemetry connected`
            : view.status === 'ERROR'
              ? 'Satellite connection lost'
              : 'Radar is idle'}
      </p>

      {content}
    </section>
  )
}

export function SquadSelector({ selectedId, onSelect }) {
  return (
    <nav
      className={styles.squadSelector}
      aria-label="PUBG squad selection"
    >
      {PUBG_VN_SQUADS.map((squad) => (
        <button
          key={squad.id}
          type="button"
          className={styles.squadButton}
          aria-pressed={selectedId === squad.id}
          onClick={() => onSelect(squad.id)}
        >
          <span className={styles.squadCode}>
            {squad.id.toUpperCase()}
          </span>
          <span className={styles.squadName}>
            {squad.name}
          </span>
        </button>
      ))}
    </nav>
  )
}
