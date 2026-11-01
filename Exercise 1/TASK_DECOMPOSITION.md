
# TASK DECOMPOSITION — LAB 03 / EXERCISE 1

## 1. Project Information

Project: Semantic Engineer & Pro-Gamer Profile Card

Course: Web Application Development — Lab 03

Technology: React 19, Vite, JavaScript, CSS Modules

Scope: Exercise 1 only

Source:
- Lab 03, slides 3, 7–14, 34
- WORK BREAKDOWN STRUCTURE (WBS).pdf

## 2. Execution Rules

- Follow the attached WBS.
- Create contracts before implementing components.
- Implement and verify one vertical slice at a time.
- Do not use forbidden React legacy APIs.
- Do not mark tasks completed without verification.
- Use atomic Git commits.
- Update this document during implementation.
- Collect screenshots for the final evidence PDF.

Status legend:
- [ ] Pending
- [x] Completed and verified

## 3. Task Decomposition

### 1.1 Project Foundation

#### 1.1.1 React 19 + Vite Environment
- [x] Initialize a Vite React application.
- [x] Verify React 19 dependencies.
- [x] Configure createRoot() and StrictMode.
- [x] Verify the development server runs.

#### 1.1.2 Project Governance Rules
- [x] Create project-rules.md.
- [x] Define semantic HTML and accessibility rules.
- [x] Document forbidden legacy APIs.
- [x] Define Git and verification rules.

#### 1.1.3 Component Contracts
- [x] Define DeveloperCard props and default values.
- [x] Define SkillBadge props.
- [x] Define metrics and skills data structures.
- [x] Document component acceptance criteria.

### 1.2 Profile Component Package

#### 1.2.1 DeveloperCard Component
- [x] Implement a functional component.
- [x] Use article, header, hgroup and heading.
- [x] Ensure zero div elements.

#### 1.2.2 SkillBadge Component
- [x] Implement reusable SkillBadge.
- [x] Render skill data with stable IDs.
- [x] Integrate badges into the profile.

#### 1.2.3 Semantic Profile Data
- [x] Display profile identity and role.
- [x] Render metrics using dl, dt and dd.
- [x] Use keyed Fragments for metric pairs.
- [x] Render an accessible skills list.

#### 1.2.4 Avatar & Fallback
- [x] Use an HTTPS image source.
- [x] Define alt text and image dimensions.
- [x] Implement fallback initials.
- [x] Verify fallback behavior.

### 1.3 Presentation Package

#### 1.3.1 CSS Module & Design Tokens
- [x] Create DeveloperCard.module.css.
- [x] Define CSS Custom Properties.
- [x] Apply scoped component classes.

#### 1.3.2 Profile & Badge Styling
- [x] Style profile identity and avatar.
- [x] Style metadata and skill badges.
- [x] Verify consistent presentation.

#### 1.3.3 Responsive Layout
- [x] Support a 375px viewport.
- [x] Prevent horizontal overflow.
- [x] Prevent content overlap.

### 1.4 Quality Assurance Package

#### 1.4.1 Semantic & Accessibility Audit
- [ ] Verify zero div tags in DeveloperCard.
- [ ] Inspect semantic DOM structure.
- [ ] Inspect the Accessibility Tree.
- [ ] Save verification screenshots.

#### 1.4.2 Media Security & Stability Audit
- [ ] Verify HTTPS-only media.
- [ ] Verify image dimensions.
- [ ] Test avatar fallback.
- [ ] Save verification screenshots.

#### 1.4.3 Responsive & Runtime Audit
- [ ] Test the 375px viewport.
- [ ] Check for horizontal overflow.
- [ ] Inspect browser console errors.
- [ ] Save verification screenshots.

### 1.5 Delivery Package

#### 1.5.1 Source Code Deliverables
- [ ] Verify the complete application runs.
- [ ] Verify the final source structure.

#### 1.5.2 Git Commit History
- [ ] Create meaningful atomic commits.
- [ ] Include the two required Exercise 1 commits.
- [ ] Verify git log against completed work.

#### 1.5.3 Verification Evidence
- [ ] Update AI_FAILURE_AUDIT.md using real findings.
- [ ] Collect screenshot evidence.
- [ ] Combine Exercise 1 screenshots into one PDF.
- [ ] Verify all WBS acceptance criteria.

## 4. Current Progress

## 4. Current Progress

## 4. Current Progress

Current checkpoint: 15 — Presentation Verification

Completed:
- WBS 1.1 — Project Foundation.
- WBS 1.2 — Profile Component Package.
- WBS 1.3 — Presentation Package.

Verification:
- Responsive viewport 375px: PASS.
- Horizontal overflow: PASS (false).
- ESLint: PASS.
- Production build: PASS.

Next checkpoint: 16 — Quality Assurance (WBS 1.4)

## 5. Progress Log

### Entry 001 — Initial Planning
WBS mapping: 1.1–1.5

Planned:
- Establish task decomposition before implementation.
- Track verification and commits throughout Exercise 1.

Verification: Pending

Commit: Pending

### Entry 002 — Repository Foundation

WBS mapping: 1.5.2 (partial)

Completed:
- Initialized one Git repository for all three exercises.
- Created the Exercise 1/2/3 directory structure.
- Created and pushed the initial task decomposition.

Evidence:
- Initial commit: f1cb794
- Branch: main
- Local and remote synchronized

### Entry 003 — Governance Rules

WBS mapping: 1.1.2

Completed:
- Created project-rules.md.
- Documented stack, forbidden APIs, semantic HTML,
  accessibility, CSS Modules and verification rules.

Verification:
- File exists and contains the required sections.

Commit: Pending

### Entry 004 — React 19 Environment

WBS mapping: 1.1.1

Completed:
- Initialized the Vite React application.
- Installed dependencies.
- Configured React 19 createRoot and StrictMode.
- Verified the development server.

Verification:
- npm run dev: PASS
- npm run lint: PASS
- npm run build: PASS
- React version: 19.x.x

Commit: Pending

### Entry 005 — Component Contracts

WBS mapping: 1.1.3

Completed:
- Defined DeveloperCard props and default values.
- Defined reusable SkillBadge props.
- Defined metrics and skills schemas.
- Documented accessibility and acceptance criteria.

Verification:
- Contract documentation completed.
- Runtime verification pending implementation.

Commit: Pending

### Entry 006 — DeveloperCard Semantic Skeleton

WBS mapping: 1.2.1 (initial implementation)

Completed:
- Created src/components/DeveloperCard.jsx.
- Implemented a pure functional component.
- Integrated DeveloperCard into App.jsx.
- Established semantic article/header/hgroup structure.

Verification:
- Development server: PASS
- Zero div source check: PASS
- ESLint: PASS
- Production build: PASS

Commit: Pending integration with SkillBadge.

### Entry 007 — SkillBadge Integration

WBS mapping: 1.2.2

Completed:
- Created reusable SkillBadge.jsx.
- Integrated SkillBadge into DeveloperCard.
- Rendered skills using stable IDs.

Verification:
- Three default skills displayed successfully.

Commit: Pending completion of semantic profile package.

### Entry 008 — Semantic Profile Data

WBS mapping: 1.2.3

Completed:
- Added default profile metrics.
- Rendered metrics with dl/dt/dd.
- Implemented Object.entries() mapping.
- Used keyed Fragments for metric pairs.
- Preserved the accessible skills list.

Verification:
- Profile name and role displayed.
- Three metrics displayed correctly.
- Skills list displayed correctly.

Commit: Pending completion of profile package.

### Entry 009 — HTTPS Avatar & Fallback

WBS mapping: 1.2.4

Completed:
- Integrated HTTPS avatar.
- Added descriptive alt text.
- Defined explicit image dimensions.
- Implemented initials fallback using React useState.
- Verified behavior with an intentionally invalid URL.

Verification:
- Profile content: PASS
- Avatar dimensions: PASS
- Fallback initials: PASS
- Zero div elements: Pending final source audit

Commit: Pending

### Entry 010 — CSS Modules & Design Tokens

WBS mapping: 1.3.1

Completed:
- Created DeveloperCard.module.css.
- Defined reusable CSS Custom Properties.
- Applied scoped CSS Module classes to DeveloperCard.

Verification:
- CSS Module imported successfully.
- Card background and text colors displayed.
- Profile content preserved.

Commit: Pending presentation package completion.

### Entry 011 — Profile & Badge Styling

WBS mapping: 1.3.2

Completed:
- Replaced default Vite presentation styles.
- Styled profile identity and avatar.
- Applied metric grid layout.
- Styled skills as reusable visual badges.
- Preserved existing semantic structure.

Verification:
- Profile content displayed correctly.
- Avatar aligned with profile identity.
- Metrics and skill badges visually organized.

Commit: Pending responsive layout completion.

### Entry 012 — Responsive Layout

WBS mapping: 1.3.3

Completed:
- Added mobile responsive CSS.
- Adjusted profile, metrics and badge presentation.
- Verified layout at a 375px viewport.

Verification:
- 375px viewport: PASS
- Horizontal overflow: PASS (none detected)
- Content overlap: PASS (none detected)

Commit: Pending final CSS verification.

### Entry 013 — Presentation Verification

WBS mapping: 1.3.1, 1.3.2, 1.3.3

Completed:
- Integrated scoped CSS Modules and design tokens.
- Styled profile identity, metrics and skills.
- Implemented responsive styling at 375px.

Verification:
- Mobile layout: PASS.
- Horizontal overflow: PASS.
- ESLint: PASS.
- Production build: PASS.

Commit: Pending