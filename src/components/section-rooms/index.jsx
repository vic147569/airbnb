import { memo } from 'react'
import PropTypes from 'prop-types'
import RoomItem from '../room-item'
import { RoomWrapper } from './style'

const SectionRooms = memo(function SectionRooms(props) {
  const { roomList = [], itemWidth } = props
  return (
    <div>
      <RoomWrapper>
        {roomList?.slice(0, 8).map((item) => {
          return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id} />
        })}
      </RoomWrapper>
    </div>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string
}

export default SectionRooms
