
import { PUBG_VN_SQUADS } from '../data/pubgSquads.js'

const PACKET_LOSS_RATE = 0.35
const MIN_LATENCY_MS = 900
const MAX_LATENCY_MS = 1800

export function fetchKraftonPubgTelemetry(
  squadId,
  { signal } = {},
) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Request aborted', 'AbortError'))
      return
    }

    const squad = PUBG_VN_SQUADS.find(
      (item) => item.id === squadId,
    )

    if (!squad) {
      reject(new Error(`Unknown squad: ${squadId}`))
      return
    }

    let settled = false
    let timeoutId

    const cleanup = () => {
      clearTimeout(timeoutId)
      signal?.removeEventListener('abort', onAbort)
    }

    const onAbort = () => {
      if (settled) return

      settled = true
      cleanup()
      reject(new DOMException('Request aborted', 'AbortError'))
    }

    signal?.addEventListener('abort', onAbort, { once: true })

    const latency =
      MIN_LATENCY_MS +
      Math.random() * (MAX_LATENCY_MS - MIN_LATENCY_MS)

    timeoutId = setTimeout(() => {
      if (settled) return

      settled = true
      cleanup()

      if (Math.random() < PACKET_LOSS_RATE) {
        reject(new Error('Satellite packet timeout'))
        return
      }

      resolve({ ...squad })
    }, latency)
  })
}
