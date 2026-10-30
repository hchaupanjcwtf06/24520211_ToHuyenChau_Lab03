
# PROJECT RULES — LAB 03 / EXERCISE 1

## 1. Technology Stack

- React 19
- Vite
- JavaScript ES2024
- JSX with automatic JSX runtime
- CSS Modules
- CSS Custom Properties

Use React 19 createRoot() and StrictMode.

## 2. Forbidden Legacy APIs

Do not use:

- ReactDOM.render()
- Class components extending React.Component
- Component.defaultProps
- Legacy React lifecycle methods
- keyCode or deprecated keypress handlers
- window.alert()
- antd/dist/antd.css
- Insecure HTTP image sources

Use pure functional components and ES6 default parameters.

## 3. Semantic HTML Requirements

- Use semantic HTML landmarks.
- DeveloperCard must use article, header and hgroup.
- Profile metadata must use dl, dt and dd.
- Skills must use ul and li.
- Do not use div elements inside DeveloperCard.jsx.
- Maintain a valid heading hierarchy.
- Do not use dangerouslySetInnerHTML.

## 4. Component Architecture

- Define component contracts before implementation.
- Implement reusable DeveloperCard and SkillBadge components.
- Keep components pure.
- Pass data through props.
- Use stable entity IDs as React keys.
- Use keyed Fragments for mapped metadata pairs.
- Use accessible text alternatives for images.

## 5. State and Effects

- Never mutate React state directly.
- Use immutable updates.
- Do not store redundant derived state.
- Do not use effects for calculations that can run during render.
- Every effect managing timers, listeners or requests must clean up.
- Avoid unnecessary state and effects in Exercise 1.

## 6. Styling and Responsive Design

- Use DeveloperCard.module.css for scoped styles.
- Use CSS Custom Properties for design tokens.
- Avoid legacy inline presentation styles.
- Support viewport widths starting at 375px.
- Prevent horizontal overflow and content overlap.
- Preserve readable text and keyboard accessibility.

## 7. Media Security

- Use HTTPS media sources.
- Provide descriptive image alt text.
- Set explicit image width and height.
- Implement an initials fallback when avatar loading fails.
- Do not expose secrets or credentials.

## 8. AI-Assisted Engineering Workflow

Follow the four-stage workflow:

1. Update TASK_DECOMPOSITION.md for the current slice.
2. Define or review component contracts.
3. Implement one constrained atomic change.
4. Verify results and create an atomic Git commit.

Do not generate the entire exercise in one prompt.

Every AI-generated change must be reviewed and verified.

Record actual AI-related failures in AI_FAILURE_AUDIT.md.
Do not invent failures or verification results.

## 9. Verification Requirements

Before marking work completed:

- Verify semantic HTML and DOM structure.
- Verify the Accessibility Tree.
- Verify zero div tags in DeveloperCard.jsx.
- Verify HTTPS-only media.
- Verify avatar dimensions and fallback.
- Verify responsive behavior at 375px.
- Check browser console errors.
- Record screenshot evidence.

## 10. Git and Deliverables

- Maintain one repository for all three exercises.
- Keep Exercise 1, Exercise 2 and Exercise 3 separate.
- Commit small, meaningful changes.
- Preserve the two Exercise 1 commits required by slide 13.
- Update TASK_DECOMPOSITION.md progressively.
- Collect Exercise 1 screenshots in one PDF.
- Do not claim a checkpoint passed without verification.
