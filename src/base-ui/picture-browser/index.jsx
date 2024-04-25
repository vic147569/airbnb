import { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon_close'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'
import IconTriangleBottom from '@/assets/svg/icon_triangle_bottom'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriangleTop from '@/assets/svg/Icon_triangle_top'

const PictureBrowser = memo(function PictureBrowser(props) {
  const { pictureUrls, closeClick } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(false)
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  function closeBtnClickHandle() {
    closeClick && closeClick()
  }

  function controlClickHandle(isNext) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex >= pictureUrls.length) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  function bottomItemClickHandle(index) {
    setCurrentIndex(index)
    setIsNext(index > currentIndex ? true : false)
  }

  return (
    <BrowserWrapper showlist={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={() => controlClickHandle(false)}>
            <IconArrowLeft width={77} height={77} />
          </div>
          <div className="btn right" onClick={() => controlClickHandle(true)}>
            <IconArrowRight width={77} height={77} />
          </div>
        </div>
        <div className="picture">
          <img src={pictureUrls[currentIndex]} alt="" />
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room apartment {currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={() => setShowList(!showList)}>
              <span>{showList ? 'Hide' : 'Show'} List</span>
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex} isNext={isNext}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames('item', { active: currentIndex === index })}
                    key={item}
                    onClick={() => bottomItemClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func
}

export default PictureBrowser
