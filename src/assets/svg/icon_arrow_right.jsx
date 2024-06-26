import { memo } from 'react'
import PropTypes from 'prop-types'

const IconArrowRight = memo((props) => {
  const { width = 12, height = 12 } = props
  return (
    <svg
      viewBox="0 0 18 18"
      role="img"
      aria-hidden="false"
      aria-label="next"
      focusable="false"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: 'block',
        fill: 'currentcolor'
      }}
    >
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
        fillRule="evenodd"
      />
    </svg>
  )
})

IconArrowRight.displayName = 'IconArrowRight'
IconArrowRight.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}
export default IconArrowRight
