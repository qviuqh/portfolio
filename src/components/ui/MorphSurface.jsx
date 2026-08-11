import { useState } from 'react'

/**
 * A compact surface that expands in place while keeping the interaction
 * accessible to keyboard and assistive-technology users.
 */
export function MorphSurface({ className = '', collapsed, expanded }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const expand = () => setIsExpanded(true)
  const collapse = () => setIsExpanded(false)

  return (
    <div className={`morph-surface ${className}`} data-expanded={isExpanded}>
      {isExpanded ? expanded({ collapse }) : collapsed({ expand })}
    </div>
  )
}
