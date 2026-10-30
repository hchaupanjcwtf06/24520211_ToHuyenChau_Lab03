
import { Fragment, useState } from 'react'
import { SkillBadge } from './SkillBadge.jsx'

const DEFAULT_METRICS = {
  commits: 512,
  vdomNodes: 0,
  a11yScore: 100,
}

const DEFAULT_SKILLS = [
  { id: 'sk-1', name: 'React 19 Fiber', tier: 'Core' },
  { id: 'sk-2', name: 'Semantic HTML', tier: 'Core' },
  { id: 'sk-3', name: 'CSS Modules', tier: 'Core' },
]

const DEFAULT_AVATAR_URL =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240'

function getInitials(fullName) {
  return fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(-2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('') || '?'
}

export function DeveloperCard({
  fullName = 'Tran Vinh Khiem',
  role = 'Senior Systems Architect • UIT S3T',
  avatarUrl = DEFAULT_AVATAR_URL,
  metrics = DEFAULT_METRICS,
  skills = DEFAULT_SKILLS,
}) {
  const [failedAvatarUrl, setFailedAvatarUrl] = useState(null)

  const showFallback = !avatarUrl || failedAvatarUrl === avatarUrl

  return (
    <article aria-labelledby="dev-heading">
      <header>
        {showFallback ? (
          <span role="img" aria-label={`Avatar initials for ${fullName}`}>
            {getInitials(fullName)}
          </span>
        ) : (
          <img
            src={avatarUrl}
            alt={`Profile avatar of ${fullName}`}
            width={64}
            height={64}
            onError={() => setFailedAvatarUrl(avatarUrl)}
          />
        )}

        <hgroup>
          <h2 id="dev-heading">{fullName}</h2>
          <p>{role}</p>
        </hgroup>
      </header>

      <dl>
        {Object.entries(metrics).map(([key, value]) => (
          <Fragment key={key}>
            <dt>{key}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>

      <ul aria-label="Engineered Skills">
        {skills.map((skill) => (
          <li key={skill.id}>
            <SkillBadge name={skill.name} tier={skill.tier} />
          </li>
        ))}
      </ul>
    </article>
  )
}
