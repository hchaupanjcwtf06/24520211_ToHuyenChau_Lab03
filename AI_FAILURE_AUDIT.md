
# AI FAILURE AUDIT — LAB 03 / EXERCISE 1

## 1. Purpose

Document observed AI-assisted development failures,
their technical causes, verification evidence,
corrections, and engineering lessons.

This audit follows the Lab 03 engineering accountability
and AI verification requirements.

Scope: Exercise 1 only.

## 2. AF-01 — Missing CSS Module Bindings

Category: AI-generated integration omission

Status: Resolved

### Problem

The assistant instructed the developer to import
DeveloperCard.module.css, but the JSX did not contain
the required CSS Module className bindings.

The styles import was unused, and the expected
component styling did not appear.

### Detection

- VS Code displayed the styles import as unused.
- The browser showed an unstyled profile.
- Source inspection confirmed missing className bindings.

### Root Cause

The CSS Module was imported without connecting its
exported class names to the rendered JSX elements.

### Correction

Added scoped className bindings to:

- article: styles.card
- header: styles.header
- dl: styles.metrics
- ul: styles.skills

### Verification

The profile card displayed the expected background,
layout, colors and spacing after the bindings were added.

## 3. AF-02 — Skills List Styling Not Applied

Category: Incomplete CSS Module integration

Status: Resolved

Related to: AF-01

### Problem

The skills list remained a standard bulleted list
instead of displaying styled skill badges.

### Detection

Chrome DevTools showed:

- The article had a generated CSS Module class.
- The ul element had no generated skills class.
- The list retained browser-default styling.

### Root Cause

The skills className binding was missing from the ul
element, so the .skills CSS rules were not applied.

### Correction

Added styles.skills to the skills ul element.

### Verification

The list displayed styled badges after the fix.

### Classification Note

AF-02 is a specific manifestation of the same
CSS Module integration failure family as AF-01.
It is documented separately for its distinct
DevTools verification evidence, not counted as
an independent root cause.

## 4. AF-03 — Metrics Grid Layout Risk

Category: AI-generated CSS design risk

Status: Potential Risk — Not Reproduced

### Problem

The generated metrics CSS assigns grid-row positions
to dt and dd elements while the component renders
them as alternating pairs.

This creates a risk of incorrect auto-placement,
particularly if the metrics collection changes.

### Detection

The risk was identified through review of the
rendered DOM structure and CSS Grid rules.

### Root Cause

The layout assumes a fixed number and arrangement
of metric entries rather than explicitly mapping
each label to its corresponding value.

### Verification Results

- Default metrics: PASS
- Label-value correspondence: PASS
- Responsive 375px: PASS
- Horizontal overflow: PASS
- Content overlap: PASS

### Conclusion

The potential CSS Grid layout risk was reviewed
against the actual rendered DOM and mobile layout.

No visible layout defect was reproduced with
the current three-metric dataset.

AF-03 is retained as an engineering risk,
not a confirmed AI-generated runtime failure.

No corrective code change was required.

## 5. Engineering Lessons

- Importing CSS Modules is not sufficient;
  JSX className bindings must also exist.
- Visual inspection and DevTools complement linting.
- CSS Grid must be evaluated against the actual DOM.
- AI-generated changes require human verification.
- Related symptoms should not be misrepresented
  as independent failures.

## 6. Evidence Status

AF-01: Observed and resolved.
AF-02: Observed and resolved; related to AF-01.
AF-03: Risk identified; runtime validation pending.

Additional independent failures must only be recorded
if supported by actual verification evidence.


## Exercise 2 — AI Failure Audit

### AF-04 — Controlled Number Input Leading Zero

Status: Resolved

Problem:
The AI-generated IQ input handler immediately
replaced an empty value with numeric zero.

Result:
Users could encounter input values such as 0200
when clearing and re-entering numbers.

Root cause:
The controlled input could not temporarily
represent an empty value.

Correction:
Allow an empty string while the input is cleared.
Use valueAsNumber for valid numeric input.

Verification:
- Empty input works.
- Re-entering numeric values works.
- IQ filtering remains correct.

### AF-05 — Handler Scope Error

Status: Resolved

Problem:
handleDelete and handleReset were accidentally
nested inside handleIqChange during integration.

Result:
React threw ReferenceError:
handleReset is not defined.

Correction:
Moved both functions to ScientistDirectory scope.

Verification:
- Directory renders correctly.
- Delete and Reset operate normally.

### AF-06 — Keyboard Focus Loss After Deletion

Status: Resolved

Problem:
Deleting the currently focused record removed
its button from the DOM.

Result:
Keyboard focus returned to the body element.

Detection:
Chrome DevTools document.activeElement inspection.

Correction:
Implemented focus management with refs and
useLayoutEffect.

Focus moves to a surviving Delete button or
Reset Directory when no records remain.

Verification:
- Focus remains usable after deletion.
- Focus fallback to Reset works.
- ESLint and production build pass.

## Exercise 2 Audit Summary

Confirmed implementation failures:
- AF-04: Input handling
- AF-05: Handler scope
- AF-06: Focus management

All three issues were corrected and verified.

Note:
AF-05 occurred during manual code integration.
It should not be classified as a confirmed
AI-generated defect without evidence of origin.
