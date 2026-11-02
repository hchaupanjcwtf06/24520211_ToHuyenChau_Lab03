
# TASK DECOMPOSITION — LAB 03 / EXERCISE 2

## 1. Project Information

Exercise: Interactive Scientist & Pioneer Directory

Technology:
- React 19
- Vite
- JavaScript ES2024
- React Hooks
- CSS Modules

References:
- Lab 03, Slides 8, 12, 16–19
- Shared AI_FAILURE_AUDIT.md

Repository:
24520211_ToHuyenChau_Lab03

## 2. Engineering Rules

- Follow contract-first development.
- Implement one vertical slice at a time.
- No React class components.
- No ReactDOM.render().
- Never mutate state directly.
- No useEffect for filtering or sorting.
- Use stable IDs for React keys.
- Use useId() for accessible form labels.
- Verify code before atomic commits.
- Update this document progressively.
- Record actual AI failures in the shared audit.

## 3. Task Decomposition

### 2.1 Project Foundation

#### 2.1.1 React Environment
- [x] Initialize React 19 + Vite in Exercise 2.
- [x] Configure createRoot() and StrictMode.
- [x] Verify development server, lint and build.

#### 2.1.2 Governance & Contracts
- [x] Define project rules.
- [x] Define ScientistDirectory component contract.
- [x] Define data schema and state contracts.

### 2.2 Data & State Package

#### 2.2.1 Scientist Dataset
- [x] Define six initial scientist records.
- [x] Assign stable unique IDs.
- [x] Define name, age and IQ fields.

#### 2.2.2 State Management
- [ ] Implement people state.
- [ ] Implement query state.
- [ ] Implement minIq state.
- [ ] Implement sortBy state.
- [ ] Ensure immutable state updates.

### 2.3 Interactive Directory Package

#### 2.3.1 Search
- [ ] Implement case-insensitive name search.
- [ ] Trim search input.
- [ ] Use controlled React input.

#### 2.3.2 IQ Filtering
- [ ] Implement numeric minimum-IQ filtering.
- [ ] Use valueAsNumber.
- [ ] Handle NaN safely.

#### 2.3.3 Sorting
- [ ] Implement IQ sorting.
- [ ] Implement age sorting.
- [ ] Use immutable toSorted().
- [ ] Avoid redundant derived state.

#### 2.3.4 Delete & Reset
- [ ] Delete records by stable ID.
- [ ] Restore the original dataset.
- [ ] Preserve correct rendering and keys.

### 2.4 Accessibility & UI Package

#### 2.4.1 Accessible Form
- [ ] Connect labels and inputs using useId().
- [ ] Use semantic form elements.
- [ ] Support keyboard interaction.

#### 2.4.2 Results & Status
- [ ] Render results with stable keys.
- [ ] Display filtered result count.
- [ ] Use role="status" and aria-live="polite".
- [ ] Provide an accessible empty state.

#### 2.4.3 Responsive Presentation
- [ ] Implement component styling.
- [ ] Verify desktop layout.
- [ ] Verify 375px viewport.
- [ ] Prevent horizontal overflow.

### 2.5 Verification Package

#### 2.5.1 Functional Testing
- [ ] Verify case-insensitive search.
- [ ] Verify numeric IQ filter.
- [ ] Verify IQ and age sorting.
- [ ] Verify delete and reset.

#### 2.5.2 React Architecture Audit
- [ ] Verify no useEffect-based derived state.
- [ ] Verify immutable updates and stable keys.
- [ ] Inspect React DevTools Profiler.
- [ ] Check render behavior during search.
- [ ] Verify focus behavior after deletion.

#### 2.5.3 Quality Checks
- [ ] Run ESLint.
- [ ] Run production build.
- [ ] Inspect browser console.
- [ ] Capture verification screenshots.

### 2.6 Delivery Package

#### 2.6.1 Documentation
- [ ] Update task decomposition.
- [ ] Complete README.
- [ ] Update shared AI failure audit if needed.

#### 2.6.2 Git History
- [ ] Commit normalized scientist dataset.
- [ ] Commit search, IQ filter and sorting.
- [ ] Commit delete, reset and live status.
- [ ] Verify atomic commit history.
- [ ] Push to shared GitHub repository.

#### 2.6.3 Final Review
- [ ] Verify all acceptance criteria.
- [ ] Confirm source code is complete.
- [ ] Confirm evidence is available.

## 4. Required Git Commit Mapping

Feature Commit 1:
Normalize scientist data with stable IDs.

Feature Commit 2:
Implement search, IQ filter and immutable sorting.

Feature Commit 3:
Implement delete, reset and accessible live status.

Additional setup, contract and verification commits
may be created when they represent distinct changes.

## 5. Current Progress

Current stage: Initial Task Decomposition

Completed:
- Task planning documentation.

Next:
- Initialize React 19 + Vite.
- Define component and state contracts.

## 6. Progress Log

### Entry 001 — Initial Planning

Completed:
- Analyzed Exercise 2 requirements.
- Defined implementation tasks and verification criteria.
- Mapped the required feature commits.

Verification:
- Planning document prepared.

Commit: Pending

### Entry 002 — Environment & Contracts

Completed:
- Initialized React 19 + Vite.
- Verified createRoot and StrictMode.
- Created project-rules.md.
- Defined ScientistDirectory contracts.
- Defined scientist schema and state design.

Verification:
- React 19: PASS
- ESLint: PASS
- Production build: PASS
- Development server: PASS

Next:
- Implement normalized scientist dataset.

Commit: Pending

### Entry 003 — Scientist Dataset & Initial Rendering

WBS mapping: 2.2.1, 2.2.2 (partial)

Completed:
- Created six scientist records with stable IDs.
- Created ScientistDirectory functional component.
- Initialized people state.
- Rendered semantic scientist records.
- Integrated ScientistDirectory into App.

Verification:
- Six records displayed: PASS
- Stable IDs: PASS
- ESLint: PASS
- Production build: PASS

Next:
- Search, numeric IQ filter and immutable sorting.

Commit: Pending