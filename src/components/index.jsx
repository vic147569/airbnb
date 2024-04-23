import { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { TabsWrapper } from './style'
import classNames from 'classnames'

const SectionTabs = memo(function SectionTabs(props) {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClick(index, item)
  }

  return (
    <TabsWrapper>
      {tabNames.map((item, index) => {
        return (
          <div
            className={classNames('item', { active: index === currentIndex })}
            key={item}
            onClick={() => itemClickHandle(index, item)}
          >
            {item}
          </div>
        )
      })}
    </TabsWrapper>
  )
})

SectionTabs.propTypes = { tabNames: PropTypes.array, tabClick: PropTypes.func }

export default SectionTabs
