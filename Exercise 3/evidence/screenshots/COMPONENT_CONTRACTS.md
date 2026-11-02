
# Exercise 3 — Component Contracts

## 1. Squad Dataset

Export:
`PUBG_VN_SQUADS`

Each squad contains:
- id: unique stable string
- name: string
- map: string
- phase: string
- alive: non-negative integer
- kills: non-negative integer
- wwcdProb: percentage string
- status: string

Required IDs:
- ces
- te
- ge

## 2. Telemetry Service

Function:
`fetchKraftonPubgTelemetry(squadId, { signal })`

Input:
- squadId: valid squad ID
- signal: AbortSignal

Output:
- Promise resolving to the selected squad's telemetry

Behavior:
- Simulate asynchronous network latency.
- Fail approximately 35% of non-aborted requests.
- Reject unknown squad IDs.
- Immediately reject pre-aborted requests.
- Cancel pending timers on abort.
- Reject cancellation with AbortError.
- Do not update React state directly.

## 3. PubgMatchTelemetry

Component:
`PubgMatchTelemetry({ squadId = 'te' })`

State:
- IDLE: no completed request yet
- LOADING: request in progress
- SUCCESS: valid telemetry received
- ERROR: request failed

State invariants:
- IDLE: data=null, error=null
- LOADING: data=null, error=null
- SUCCESS: data exists, error=null
- ERROR: data=null, error exists

Effects:
- Start a request when squadId or retryTick changes.
- Abort previous request during effect cleanup.
- Ignore intentional AbortError.
- Never display stale telemetry after squad changes.

## 4. Squad Selector

- Provide CES, TE, and GE options.
- Use semantic buttons.
- Indicate active selection with aria-pressed.
- Allow keyboard selection.
- Update squadId through React state.

## 5. Loading Skeleton

- Reserve at least 220px of vertical space.
- Display loading feedback with aria-busy.
- Use a reduced-motion-safe animation.
- Minimize layout shift when data arrives.

## 6. Error & Retry

- Render a section with role="alert".
- Include an understandable error message.
- Provide Reconnect Satellite button.
- Retry must increment retryTick.
- Do not use window.alert().

## 7. Acceptance Criteria

- All three squads are selectable.
- All four state-machine statuses are handled.
- 35% packet-loss simulation is implemented.
- Aborted requests never produce false ERROR alerts.
- Failed requests can be retried.
- Telemetry data matches the selected squad.
- Skeleton renders during LOADING.
- Keyboard navigation works.
- 375px layout has no horizontal overflow.
- ESLint and production build pass.
