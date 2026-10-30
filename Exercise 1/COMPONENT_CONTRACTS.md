
# COMPONENT CONTRACTS — EXERCISE 1

## 1. Purpose

Define the props, default values, data structures,
semantic requirements and acceptance criteria for
DeveloperCard and SkillBadge before implementation.

References:
- Lab 03, slides 10–14
- WBS 1.1.3, 1.2.1–1.2.4

## 2. DeveloperCard Contract

File: src/components/DeveloperCard.jsx

Component type:
- Pure functional React component.
- Uses ES6 default parameters.
- Does not use class components or defaultProps.

### Props

| Prop | Type | Default | Purpose |
|---|---|---|---|
| fullName | string | Tran Vinh Khiem | Profile name |
| role | string | Senior Systems Architect • UIT S3T | Profile role |
| avatarUrl | string | HTTPS Unsplash URL | Profile image |
| metrics | Record<string, string or number> | Default metrics | Profile statistics |
| skills | Skill[] | Default skills | Skill collection |

### Default Metrics

- commits: 512
- vdomNodes: 0
- a11yScore: 100

### Default Skills

- id: sk-1
- name: React 19 Fiber
- tier: Core

### Semantic Requirements

- Root element: article.
- Identity section: header and hgroup.
- Card title: h2 with accessible labeling.
- Profile metrics: dl, dt, dd.
- Metrics mapping: Object.entries() and keyed Fragment.
- Skills collection: ul and li.
- Skill list keys: stable skill IDs.
- Zero div elements inside DeveloperCard.jsx.

### Avatar Requirements

- HTTPS image URL.
- Descriptive alt text.
- Explicit width and height.
- Fallback initials if image loading fails.
- No insecure image URLs.

## 3. SkillBadge Contract

File: src/components/SkillBadge.jsx

Component type:
- Reusable pure functional component.
- Receives data through props.
- Does not mutate incoming data.

### Props

| Prop | Type | Default | Purpose |
|---|---|---|---|
| name | string | Required | Skill name |
| tier | string | Core | Skill classification |

### Rendering Requirements

- Displays skill name and tier.
- Can be reused for multiple skills.
- Does not introduce unnecessary div wrappers.
- Uses semantic text elements.
- Is rendered inside the parent's li element.
- The parent list supplies key={skill.id}.

## 4. Skill Data Schema

Each skill must have:

- id: non-empty stable string
- name: non-empty string
- tier: string

Example:

```js
{
  id: 'sk-1',
  name: 'React 19 Fiber',
  tier: 'Core'
}
```

## 5. Component Integration

DeveloperCard receives a skills array.

For each skill:
1. Use the skill's stable ID as the React key.
2. Render a semantic li element.
3. Render SkillBadge with name and tier props.

No array index keys.

## 6. Accessibility Contract

- Use a valid heading hierarchy.
- Associate article with its heading.
- Provide image alt text.
- Preserve semantic description lists.
- Avoid inaccessible or redundant wrappers.
- Keep text readable at mobile widths.

## 7. Acceptance Criteria

DeveloperCard:
- [ ] Functional component with default props.
- [ ] Semantic article/header/hgroup structure.
- [ ] Metadata rendered using dl/dt/dd.
- [ ] Metrics rendered with keyed Fragments.
- [ ] SkillBadge integrated into skills list.
- [ ] No div elements.
- [ ] HTTPS avatar with dimensions and fallback.

SkillBadge:
- [ ] Reusable component.
- [ ] Displays skill name and tier.
- [ ] Does not introduce div-soup.
- [ ] Parent uses stable IDs.

Integration:
- [ ] Component renders in React 19.
- [ ] CSS Modules applied.
- [ ] Responsive at 375px.
- [ ] Accessibility verification passes.

These criteria will be checked during
implementation and quality assurance.
