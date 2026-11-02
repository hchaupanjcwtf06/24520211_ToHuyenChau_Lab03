
import { useId, useState } from 'react'
import { SMART_PEOPLE } from '../data/scientists.js'

export function ScientistDirectory({
  initialData = SMART_PEOPLE,
}) {
  const searchId = useId()
  const iqId = useId()
  const sortId = useId()

  const [people, setPeople] = useState(initialData)
  const [query, setQuery] = useState('')
  const [minIq, setMinIq] = useState(160)
  const [sortBy, setSortBy] = useState('iq-desc')

  const normalizedQuery = query.trim().toLowerCase()

  const visiblePeople = people
    .filter(
      (person) =>
        person.name.toLowerCase().includes(normalizedQuery) &&
        (minIq === '' || person.iq >= minIq),
    )
    .toSorted((a, b) => {
      if (sortBy === 'age-asc') {
        return a.age - b.age
      }

      return b.iq - a.iq
    })


    function handleIqChange(event) {
        if (event.target.value === '') {
          setMinIq('')
          return
        }
    
        const value = event.target.valueAsNumber
    
        if (!Number.isNaN(value)) {
          setMinIq(value)
        }
      }
    
      function handleDelete(id) {
        setPeople((prev) =>
          prev.filter((person) => person.id !== id)
        )
      }
    
      function handleReset() {
        setPeople([...initialData])
        setQuery('')
        setMinIq(160)
        setSortBy('iq-desc')
      }
    
  return (
    <section aria-labelledby="directory-heading">
      <h2 id="directory-heading">
        Scientist & Pioneer Directory
      </h2>

      <form
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor={searchId}>Search by name</label>
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter scientist name"
        />

        <label htmlFor={iqId}>Minimum IQ</label>
        <input
          id={iqId}
          type="number"
          min="0"
          value={minIq}
          onChange={handleIqChange}
        />

        <label htmlFor={sortId}>Sort by</label>
        <select
          id={sortId}
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="iq-desc">IQ: High to Low</option>
          <option value="age-asc">Age: Low to High</option>
        </select>
      </form>

<output role="status" aria-live="polite">
  Found {visiblePeople.length} pioneers
</output>

<button type="button" onClick={handleReset}>
  Reset Directory
</button>

      
{visiblePeople.length === 0 ? (
  <p>No matching scientists found.</p>
) : (
  <ul>
    {visiblePeople.map((person) => (
      <li key={person.id}>
        <article>
          <h3>{person.name}</h3>

          <dl>
            <dt>Age</dt>
            <dd>{person.age}</dd>

            <dt>IQ</dt>
            <dd>{person.iq}</dd>
          </dl>

          <button
            type="button"
            onClick={() => handleDelete(person.id)}
            aria-label={`Delete ${person.name}`}
          >
            Delete
          </button>
        </article>
      </li>
    ))}
  </ul>
)}
    </section>
  )
}
