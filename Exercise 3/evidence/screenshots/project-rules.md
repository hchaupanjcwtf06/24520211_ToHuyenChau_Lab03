
# Exercise 3 — Engineering Rules

## 1. Project Scope
- Build PubgMatchTelemetry using React 19 and Vite.
- Use the PUBG_VN_SQUADS dataset from Lab 03, Slide 22.
- Simulate telemetry requests; do not claim to use the real KRAFTON API.
- Keep Exercise 3 independent from Exercises 1 and 2.

## 2. Architecture
- Use functional React components and hooks.
- Separate squad data, telemetry service, and UI components.
- Use one explicit state machine: IDLE, LOADING, SUCCESS, ERROR.
- Do not use separate isLoading and isError booleans.
- Use immutable state updates.
- Do not mutate the original squad dataset.

## 3. Asynchronous Operations
- Create an AbortController for each telemetry request.
- Pass AbortSignal to the telemetry service.
- Abort requests when switching squads or unmounting.
- Never convert intentional AbortError into ERROR state.
- Prevent stale responses from overwriting the selected squad.
- Clean up every timer and asynchronous operation.
- Simulate a 35% packet-loss probability.

## 4. Accessibility
- Use semantic HTML elements.
- Use accessible squad selection controls.
- Preserve visible keyboard focus.
- Use aria-busy for loading feedback.
- Use role="alert" for request errors.
- Never use window.alert().
- Provide a keyboard-accessible retry button.
- Support a 375px viewport without horizontal overflow.

## 5. Quality
- ESLint and production build must pass.
- Verify IDLE, LOADING, SUCCESS, and ERROR behavior.
- Verify cancellation under rapid squad switching.
- Verify skeleton dimensions and CLS in DevTools.
- Record actual test results; never invent PASS evidence.
- Document confirmed AI failures in the shared root audit.

## 6. Git Workflow
- Update TASK_DECOMPOSITION.md after each completed stage.
- Keep commits small and logically grouped.
- Preserve the two mandatory feature commits:
  1. feat(ex3): implement PUBG VN 4-state telemetry & AbortController
  2. feat(ex3): add skeleton UI & retry alert
- Push only verified changes.
- Do not modify Exercises 1 or 2.
