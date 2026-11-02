
# Exercise 3 — KRAFTON PUBG Vietnam Series Live Telemetry

## 1. Project Overview

Build a fault-tolerant PUBG Vietnam Series telemetry widget
using React 19, Vite, and an abortable asynchronous state machine.

Source: Lab 03, Slides 21–23.

## 2. Task Decomposition

### 3.1 Project Foundation

#### 3.1.1 Repository Structure
- [x] Create Exercise 3 inside the shared Lab 03 repository.
- [x] Initialize a React 19 + Vite project.
- [x] Create a dedicated evidence/screenshots directory.
- [x] Confirm project independence from Exercises 1 and 2.

#### 3.1.2 Engineering Rules
- [x] Create project-rules.md.
- [x] Define component contracts.
- [x] Establish accessibility and state-management rules.
- [x] Define commit and verification requirements.

### 3.2 Telemetry Data & Service

#### 3.2.1 Squad Dataset
- [x] Define the PUBG_VN_SQUADS dataset.
- [x] Include CES, TE, and GE with stable IDs.
- [x] Preserve the telemetry fields from the provided specification.

#### 3.2.2 Simulated Telemetry Service
- [x] Implement an asynchronous telemetry request.
- [x] Simulate network latency.
- [x] Simulate a 35% packet-loss probability.
- [x] Support AbortSignal cancellation.
- [x] Reject aborted requests with AbortError.
- [x] Separate telemetry logic from React rendering.

### 3.3 Four-State Telemetry Machine

#### 3.3.1 State Model
- [x] Define IDLE, LOADING, SUCCESS, and ERROR states.
- [x] Store data and error consistently.
- [x] Prevent contradictory UI states.

#### 3.3.2 Abortable Request Lifecycle
- [x] Implement useEffect-driven telemetry requests.
- [x] Create an AbortController for each request.
- [x] Abort previous requests when switching squads.
- [x] Abort in-flight requests during cleanup.
- [x] Ignore intentional AbortError exceptions.
- [x] Prevent stale responses from overwriting current data.

#### 3.3.3 Squad Selection
- [x] Implement CES, TE, and GE selectors.
- [x] Trigger telemetry loading when selection changes.
- [x] Keep the active squad identifiable and accessible.

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

### Entry 002 — Engineering Foundation

WBS mapping: 3.1.1, 3.1.2

Completed:
- Created engineering rules.
- Defined telemetry service and component contracts.
- Initialized React 19 and Vite.
- Installed project dependencies.
- Verified the Vite development server.

Next:
- Implement squad dataset.
- Implement abortable telemetry service.
- Implement the four-state telemetry machine.

Status: Complete


### Entry 003 — Telemetry Dataset & Service

WBS mapping: 3.2.1, 3.2.2

Completed:
- Added three PUBG Vietnam squad records.
- Implemented simulated telemetry latency.
- Implemented 35% packet-loss probability.
- Added AbortSignal handling and timer cleanup.
- Separated data/service logic from UI.

Verification:
- Source implementation reviewed.
- Runtime abort verification: Pending.
- ESLint: Pending.

Next:
- Implement the four-state React telemetry machine.
- Integrate squad switching and cancellation.

Status: Implemented, awaiting runtime verification


### Entry 004 — Four-State Telemetry Machine

WBS mapping: 3.3.1, 3.3.2, 3.3.3

Completed:
- Added PubgMatchTelemetry.
- Implemented four-state view model.
- Integrated abortable telemetry requests.
- Implemented squad switching and cleanup.
- Added functional retry recovery.
- Added accessible squad selection buttons.

Verification:
- Squad selection: PASS (if manually verified)
- Stale-response prevention: PASS (if manually verified)
- Retry behavior: PASS (if manually verified)
- Browser console: Pending
- Slow 3G audit: Pending

Next:
- Implement 220px skeleton.
- Style telemetry dashboard.
- Finalize alert and retry UI.

Status: Implemented, awaiting final audit

### Entry 005 — State Machine ESLint Fix

WBS mapping: 3.3.1, 3.3.2

Completed:
- Implemented four-state telemetry rendering.
- Implemented AbortController cleanup.
- Added stale-response protection using request identity.
- Fixed react-hooks/set-state-in-effect violation.
- Verified squad switching and retry behavior.

Verification:
- ESLint: PASS
- Production build: PASS
- React state update warning: Resolved

Next:
- Implement 220px skeleton radar.
- Complete responsive telemetry dashboard.
- Finalize error recovery UI.