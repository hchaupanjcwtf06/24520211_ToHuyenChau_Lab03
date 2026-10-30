
export function SkillBadge({
    name,
    tier = 'Core',
  }) {
    return (
      <span>
        {name} ({tier})
      </span>
    )
  }
  