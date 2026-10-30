
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
- [ ] Initialize a Vite React application.
- [ ] Verify React 19 dependencies.
- [ ] Configure createRoot() and StrictMode.
- [ ] Verify the development server runs.

#### 1.1.2 Project Governance Rules
- [ ] Create project-rules.md.
- [ ] Define semantic HTML and accessibility rules.
- [ ] Document forbidden legacy APIs.
- [ ] Define Git and verification rules.

#### 1.1.3 Component Contracts
- [ ] Define DeveloperCard props and default values.
- [ ] Define SkillBadge props.
- [ ] Define metrics and skills data structures.
- [ ] Document component acceptance criteria.

### 1.2 Profile Component Package

#### 1.2.1 DeveloperCard Component
- [ ] Implement a functional component.
- [ ] Use article, header, hgroup and heading.
- [ ] Ensure zero div elements.

#### 1.2.2 SkillBadge Component
- [ ] Implement reusable SkillBadge.
- [ ] Render skill data with stable IDs.
- [ ] Integrate badges into the profile.

#### 1.2.3 Semantic Profile Data
- [ ] Display profile identity and role.
- [ ] Render metrics using dl, dt and dd.
- [ ] Use keyed Fragments for metric pairs.
- [ ] Render an accessible skills list.

#### 1.2.4 Avatar & Fallback
- [ ] Use an HTTPS image source.
- [ ] Define alt text and image dimensions.
- [ ] Implement fallback initials.
- [ ] Verify fallback behavior.

### 1.3 Presentation Package

#### 1.3.1 CSS Module & Design Tokens
- [ ] Create DeveloperCard.module.css.
- [ ] Define CSS Custom Properties.
- [ ] Apply scoped component classes.

#### 1.3.2 Profile & Badge Styling
- [ ] Style profile identity and avatar.
- [ ] Style metadata and skill badges.
- [ ] Verify consistent presentation.

#### 1.3.3 Responsive Layout
- [ ] Support a 375px viewport.
- [ ] Prevent horizontal overflow.
- [ ] Prevent content overlap.

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

Current checkpoint: 01 — Initial Task Decomposition

Current work: Create the first decomposition file.

Next checkpoint: 02 — Project Foundation

## 5. Progress Log

### Entry 001 — Initial Planning
WBS mapping: 1.1–1.5

Planned:
- Establish task decomposition before implementation.
- Track verification and commits throughout Exercise 1.

Verification: Pending

Commit: Pending
