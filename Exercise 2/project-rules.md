
# PROJECT RULES — EXERCISE 2

## Stack
- React 19, Vite, JavaScript ES2024
- Pure functional components
- CSS Modules and semantic HTML

## React Architecture
- Use createRoot() and StrictMode.
- Never use ReactDOM.render() or class components.
- Use immutable React state updates.
- Use stable entity IDs as React keys.
- Never use array indices as keys.
- Do not mutate state with push(), splice() or sort().
- Use toSorted() for immutable sorting.

## State Management
Store only independent state:
- people
- query
- minIq
- sortBy

Calculate visiblePeople during render.

Do not store filteredPeople or sortedPeople
in additional useState variables.

Do not use useEffect for filtering or sorting.

## Accessibility
- Use useId() for input IDs.
- Associate every input with a label.
- Use controlled inputs.
- Read numeric inputs with valueAsNumber.
- Handle NaN safely.
- Announce result counts through role="status".
- Preserve keyboard interaction and focus.

## AI Engineering
- Follow TASK_DECOMPOSITION.md.
- Define contracts before feature implementation.
- Implement one vertical slice at a time.
- Verify functionality before commits.
- Record confirmed AI failures in
  ../AI_FAILURE_AUDIT.md.

## Verification
- Test search, IQ filtering and sorting.
- Test delete and reset.
- Inspect React DevTools Profiler.
- Verify stable keys and immutable updates.
- Run npm run lint and npm run build.
- Test responsive layout at 375px.
- Capture actual verification evidence.
