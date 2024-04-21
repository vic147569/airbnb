import { memo } from 'react'
import parse from 'style-to-object'

const IconSearch = memo(() => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        style={parse(
          'display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; strokeWidth: 5.33333; overflow: visible;'
        )}
      >
        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
      </svg>
    </div>
  )
})

IconSearch.displayName = 'IconSearch'
export default IconSearch
