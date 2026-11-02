
# Exercise 3 — KRAFTON PUBG Vietnam Series Live Telemetry

## 1. Project Overview

Build a fault-tolerant PUBG Vietnam Series telemetry widget
using React 19, Vite, and an abortable asynchronous state machine.

Source: Lab 03, Slides 21–23.

## 2. Task Decomposition

### 3.1 Project Foundation

#### 3.1.1 Repository Structure
- [x] Create Exercise 3 inside the shared Lab 03 repository.
- [ ] Initialize a React 19 + Vite project.
- [x] Create a dedicated evidence/screenshots directory.
- [ ] Confirm project independence from Exercises 1 and 2.

#### 3.1.2 Engineering Rules
- [ ] Create project-rules.md.
- [ ] Define component contracts.
- [ ] Establish accessibility and state-management rules.
- [ ] Define commit and verification requirements.

### 3.2 Telemetry Data & Service

#### 3.2.1 Squad Dataset
- [ ] Define the PUBG_VN_SQUADS dataset.
- [ ] Include CES, TE, and GE with stable IDs.
- [ ] Preserve the telemetry fields from the provided specification.

#### 3.2.2 Simulated Telemetry Service
- [ ] Implement an asynchronous telemetry request.
- [ ] Simulate network latency.
- [ ] Simulate a 35% packet-loss probability.
- [ ] Support AbortSignal cancellation.
- [ ] Reject aborted requests with AbortError.
- [ ] Separate telemetry logic from React rendering.

### 3.3 Four-State Telemetry Machine

#### 3.3.1 State Model
- [ ] Define IDLE, LOADING, SUCCESS, and ERROR states.
- [ ] Store data and error consistently.
- [ ] Prevent contradictory UI states.

#### 3.3.2 Abortable Request Lifecycle
- [ ] Implement useEffect-driven telemetry requests.
- [ ] Create an AbortController for each request.
- [ ] Abort previous requests when switching squads.
- [ ] Abort in-flight requests during cleanup.
- [ ] Ignore intentional AbortError exceptions.
- [ ] Prevent stale responses from overwriting current data.

#### 3.3.3 Squad Selection
- [ ] Implement CES, TE, and GE selectors.
- [ ] Trigger telemetry loading when selection changes.
- [ ] Keep the active squad identifiable and accessible.

### 3.4 Loading, Success & Error UI

#### 3.4.1 Skeleton Radar
- [ ] Implement a 220px Blue-Zone skeleton.
- [ ] Add an accessible loading announcement.
- [ ] Set aria-busy appropriately.
- [ ] Match loading and content dimensions to minimize CLS.

#### 3.4.2 Successful Telemetry
- [ ] Display squad name and map.
- [ ] Display match phase and alive players.
- [ ] Display kills, WWCD probability, and zone status.
- [ ] Use semantic markup and stable data presentation.

#### 3.4.3 Error Recovery
- [ ] Render errors using section role="alert".
- [ ] Never use window.alert().
- [ ] Implement the Reconnect Satellite button.
- [ ] Retry using a dedicated retry counter.
- [ ] Recover from ERROR to LOADING and SUCCESS.

#### 3.4.4 Responsive & Accessible UI
- [ ] Support a 375px viewport.
- [ ] Verify keyboard navigation.
- [ ] Verify visible focus indicators.
- [ ] Prevent horizontal overflow.
- [ ] Keep status and error messages accessible.

### 3.5 Verification & AI Audit

#### 3.5.1 Functional Verification
- [ ] Verify all four state-machine states.
- [ ] Verify squad switching.
- [ ] Verify successful telemetry rendering.
- [ ] Verify packet-loss error handling.
- [ ] Verify retry recovery.

#### 3.5.2 Network & Race-Condition Audit
- [ ] Enable Slow 3G in Chrome DevTools.
- [ ] Rapidly switch CES → TE → GE.
- [ ] Confirm obsolete requests are canceled.
- [ ] Confirm no stale-response overwrite.
- [ ] Confirm intentional aborts do not show error alerts.

#### 3.5.3 Visual & Accessibility Audit
- [ ] Inspect loading skeleton dimensions.
- [ ] Measure CLS and target 0.00.
- [ ] Verify 375px responsiveness.
- [ ] Verify keyboard interaction.
- [ ] Check browser console for errors and warnings.

#### 3.5.4 Quality & AI Failure Audit
- [ ] Run ESLint.
- [ ] Run production build.
- [ ] Document confirmed AI-related issues if found.
- [ ] Update the shared root AI_FAILURE_AUDIT.md.
- [ ] Save supporting DevTools screenshots.

### 3.6 Delivery Package

#### 3.6.1 Documentation
- [ ] Complete README.md.
- [ ] Complete TASK_DECOMPOSITION.md.
- [ ] Finalize component contracts.
- [ ] Reference shared AI failure audit.

#### 3.6.2 Git History
- [ ] Commit project foundation and rules.
- [ ] Commit the four-state telemetry machine and AbortController.
- [ ] Commit skeleton UI and retry alert.
- [ ] Commit final verification and documentation.
- [ ] Push Exercise 3 to the shared GitHub repository.

#### 3.6.3 Final Review
- [ ] Verify all acceptance criteria.
- [ ] Confirm required evidence is available.
- [ ] Review Git commit history.
- [ ] Confirm clean working tree.

## 3. Progress Log

### Entry 001 — Task Decomposition Initialized

WBS mapping: 3.1.1

Completed:
- Reviewed Exercise 3 requirements from Slides 21–23.
- Identified the four-state telemetry contract.
- Defined implementation and verification work packages.
- Established an evidence and delivery checklist.

Next:
- Initialize React 19 + Vite.
- Create project-rules.md.
- Create COMPONENT_CONTRACTS.md.

Status: In Progress
