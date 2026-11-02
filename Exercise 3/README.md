
# Exercise 3 — KRAFTON PUBG Vietnam Series Live Telemetry

## 1. Overview

A React 19 application that simulates live match telemetry
for three PUBG Vietnam Series squads.

The project demonstrates asynchronous state management,
AbortController cancellation, error recovery, accessibility,
and responsive UI engineering.

This is a simulated telemetry system, not an integration
with the official KRAFTON API.

## 2. Technology Stack

- React 19
- Vite
- JavaScript
- CSS Modules
- React Hooks
- AbortController
- ESLint

## 3. Supported Squads

- Cerberus Esports (CES)
- The Expendables (TE)
- Genius Esports (GE)

Each squad provides:
- Squad name
- Map and match phase
- Alive players
- Kills
- WWCD probability
- Zone status

The dataset follows Lab 03, Slide 22.

## 4. Features

### Four-State Machine

The telemetry UI supports:

- IDLE
- LOADING
- SUCCESS
- ERROR

Request results are associated with request identities
to prevent stale responses from appearing.

### Simulated Telemetry Service

- Simulated latency: 900–1800 ms
- Simulated packet-loss probability: 35%
- AbortSignal cancellation
- AbortError handling
- Timer and listener cleanup

### Loading Skeleton

- Blue-Zone loading skeleton
- Minimum height: 220px
- Accessible loading feedback
- Reduced-motion support

### Error Recovery

- Accessible error alert
- Reconnect Satellite retry button
- Persistent status element for keyboard focus
- Focus preserved during retry transitions

### Responsive Dashboard

- Interactive squad selector
- Accessible active-state indicators
- Responsive telemetry metrics
- 375px mobile layout

## 5. Architecture

src/
- data/pubgSquads.js
- services/telemetry.js
- components/PubgMatchTelemetry.jsx
- components/PubgMatchTelemetry.module.css
- App.jsx

Responsibilities:

- data/: Static squad records
- services/: Asynchronous telemetry simulation
- components/: State management and presentation
- App.jsx: Selected squad state and composition

## 6. Running Locally

From the Exercise 3 directory:

    npm install
    npm run dev

Quality checks:

    npm run lint
    npm run build

## 7. Verification

Verified during development:
- Successful squad telemetry rendering
- Loading skeleton display
- Packet-loss error handling
- Retry behavior
- AbortError cancellation
- Rapid squad switching
- Responsive layout
- CLS: 0.00 in the recorded session
- Keyboard focus restoration after Retry

Important limitation:

The telemetry service uses JavaScript timers rather than
real HTTP requests.

Therefore, Chrome Network throttling does not directly
control simulated request latency, and canceled telemetry
operations do not appear as HTTP requests in DevTools.

Cancellation was verified separately using AbortSignal.

## 8. Evidence

Screenshots are stored in:

evidence/screenshots/

- 01_success_dashboard.png
- 02_loading_skeleton.png
- 03_abort_controller.png
- 04_race_condition.png
- 05_error_retry.png
- 06_mobile_375px.png
- 07_cls_audit.png

Additional verification screenshots may be included.

## 9. Engineering Documentation

- TASK_DECOMPOSITION.md
- COMPONENT_CONTRACTS.md
- project-rules.md
- ../AI_FAILURE_AUDIT.md

## 10. References

- Lab 03, Slides 21–23: State Machine and PUBG Telemetry
- Lab 03, Slide 25: AI Failure Audit
- React documentation: https://react.dev/
