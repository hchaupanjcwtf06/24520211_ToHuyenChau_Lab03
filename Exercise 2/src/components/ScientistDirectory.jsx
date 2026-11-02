
import { useState } from 'react'
import { SMART_PEOPLE } from '../data/scientists.js'

export function ScientistDirectory({
  initialData = SMART_PEOPLE,
}) {
  const [people] = useState(initialData)

  return (
    <section aria-labelledby="directory-heading">
      <h2 id="directory-heading">
        Scientist & Pioneer Directory
      </h2>

      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <article>
              <h3>{person.name}</h3>
              <dl>
                <dt>Age</dt>
                <dd>{person.age}</dd>

                <dt>IQ</dt>
                <dd>{person.iq}</dd>
              </dl>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
