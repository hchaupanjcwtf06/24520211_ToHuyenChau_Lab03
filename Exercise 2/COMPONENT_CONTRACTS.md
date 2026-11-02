
# COMPONENT CONTRACTS — EXERCISE 2

## 1. Component

Name: ScientistDirectory

File: src/components/ScientistDirectory.jsx

Type: Pure functional React component

Purpose:
Display and manage an interactive directory
of scientists and historical pioneers.

## 2. Props

initialData: Scientist[]

Default: SMART_PEOPLE

The component must not mutate initialData.

## 3. Scientist Schema

Each scientist contains:

- id: stable unique string
- name: non-empty string
- age: number
- iq: number

Initial dataset:

| ID | Name | Age | IQ |
|---|---|---:|---:|
| sp-1 | Johann Goethe | 82 | 210 |
| sp-2 | Albert Einstein | 76 | 205 |
| sp-3 | Leonardo da Vinci | 67 | 180 |
| sp-4 | Isaac Newton | 84 | 190 |
| sp-5 | James Maxwell | 48 | 190 |
| sp-6 | William Sidis | 46 | 200 |

These are the exercise's supplied values,
not independently verified historical estimates.

## 4. Independent State

people:
- Type: Scientist[]
- Initial value: initialData

query:
- Type: string
- Initial value: ""

minIq:
- Type: number
- Initial value: 160

sortBy:
- Type: string
- Initial value: "iq-desc"

## 5. Derived Data

visiblePeople is calculated during render.

Processing pipeline:

1. Filter names case-insensitively.
2. Apply minimum IQ threshold.
3. Sort using toSorted().

Do not use useState or useEffect to
synchronize derived results.

## 6. Interaction Contract

Search:
- Case-insensitive.
- Ignore surrounding whitespace.

IQ Filter:
- Use valueAsNumber.
- Handle NaN safely.

Sorting:
- Support IQ descending.
- Support age ascending.
- Keep sorting immutable.

Delete:
- Remove by stable ID.
- Use functional state updates.

Reset:
- Restore the initial dataset.
- Restore default filter and sort controls.

## 7. Accessibility Contract

- Semantic section and form.
- Inputs connected to labels via useId().
- Controlled search and number inputs.
- Result count announced with role="status"
  and aria-live="polite".
- Stable list keys.
- Accessible buttons.
- Keyboard-operable controls.

## 8. Acceptance Criteria

- [ ] Six initial records render correctly.
- [ ] Case-insensitive search works.
- [ ] Numeric IQ filtering works.
- [ ] IQ and age sorting work.
- [ ] Delete and reset work.
- [ ] Derived state uses no useEffect.
- [ ] All list keys are stable.
- [ ] Form labels are accessible.
- [ ] Live result status works.
- [ ] React Profiler verification completed.
- [ ] ESLint and production build pass.
- [ ] Responsive layout verified.
