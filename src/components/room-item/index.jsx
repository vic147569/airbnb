import { memo, useRef } from 'react'
import PropTypes from 'prop-types'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'

const RoomItem = memo(function RoomItem(props) {
  const { itemData, itemWidth = '25%' } = props
  const sliderRef = useRef()

  function controlClickHandle(isRight = true) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
  }

  return (
    <ItemWrapper
      $verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      $itemWidth={itemWidth}
    >
      <div className="inner">
        {/* swiper */}
        {itemData.picture_urls && (
          <div className="slider">
            <div className="control">
              <div className="btn left" onClick={() => controlClickHandle(false)}>
                <IconArrowLeft width="30" height="30" />
              </div>
              <div className="btn right" onClick={() => controlClickHandle(true)}>
                <IconArrowRight width="30" height="30" />
              </div>
            </div>
            <Carousel dots={false} ref={sliderRef}>
              {itemData?.picture_urls?.map((item) => {
                return (
                  <div className="cover" key={item}>
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Carousel>
          </div>
        )}
        {/* no swiper */}
        {!itemData.picture_urls && (
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        )}
        <div className="desc">{itemData.verify_info.messages.join('・')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">${itemData.price} / night</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 3.5}
            precision={0.1}
            readOnly
            sx={{ fontSize: '12px', color: '#00848a' }}
          />
          <span className="count">{itemData?.reviews_count}</span>
          {itemData?.bottom_info?.content || (
            <span className="extra"> {itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem
