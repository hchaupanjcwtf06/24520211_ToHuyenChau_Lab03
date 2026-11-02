
# Exercise 2 — Interactive Scientist & Pioneer Directory

## Overview

An interactive React 19 directory for exploring
scientists and historical pioneers.

## Technology Stack

- React 19
- Vite
- JavaScript ES2024
- CSS Modules
- React Hooks

## Features

- Case-insensitive name search
- Numeric minimum-IQ filtering
- Immutable sorting by IQ and age
- Delete individual records
- Reset the original dataset and controls
- Accessible result counter
- Empty-state feedback
- Keyboard focus restoration after deletion
- Responsive interface supporting 375px

## Architecture

Independent state:
- people
- query
- minIq
- sortBy

Derived data:
- visiblePeople

The directory computes filtering and sorting
during render without useEffect synchronization.

The project uses stable IDs and immutable
state updates.

## Running Locally

From the Exercise 2 directory:

1. npm install
2. npm run dev

## Verification

- Search, filter and sorting: PASS
- Delete and Reset: PASS
- Live status: PASS
- React Profiler: PASS
- Keyboard focus after deletion: PASS
- ESLint: PASS
- Production build: PASS

## Evidence

Verification screenshots are stored in
evidence/screenshots/.

## Documentation

- TASK_DECOMPOSITION.md
- COMPONENT_CONTRACTS.md
- project-rules.md
- ../AI_FAILURE_AUDIT.md
