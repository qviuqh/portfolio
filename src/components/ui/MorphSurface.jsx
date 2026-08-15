import { useState } from 'react'

/**
 * A compact surface that expands in place while keeping the interaction
 * accessible to keyboard and assistive-technology users.
 */
export function MorphSurface({
  className = '',
  collapsed,
  expanded,
  isExpanded: controlledIsExpanded,
  onExpandedChange,
}) {
  const [internalIsExpanded, setInternalIsExpanded] = useState(false)
  const isControlled = controlledIsExpanded !== undefined
  const isExpanded = isControlled ? controlledIsExpanded : internalIsExpanded

  const setExpanded = (nextValue) => {
    if (!isControlled) setInternalIsExpanded(nextValue)
    onExpandedChange?.(nextValue)
  }

  const expand = () => setExpanded(true)
  const collapse = () => setExpanded(false)

  return (
    <div className={`morph-surface ${className}`} data-expanded={isExpanded}>
      {isExpanded ? expanded({ collapse }) : collapsed({ expand })}
    </div>
  )
}
