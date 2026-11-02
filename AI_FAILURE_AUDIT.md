
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
