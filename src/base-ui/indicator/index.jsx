import { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex } = props
  const contentRef = useRef()

  useEffect(() => {
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth

    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth
    const totalDistance = contentScroll - contentWidth

    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    if (distance < 0) distance = 0
    if (distance > totalDistance) distance = totalDistance

    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number,
  children: PropTypes.any
}

Indicator.displayName = 'Indicator'
export default Indicator
