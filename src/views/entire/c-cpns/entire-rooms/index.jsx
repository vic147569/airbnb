import { memo } from 'react'
// import PropTypes from 'prop-types'
import { RoomsWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'

const EntireRooms = memo(function EntireRooms() {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  )

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount} more house</h2>
      <div className="list">
        {roomList.map((item) => {
          return <RoomItem key={item._id} itemData={item} itemWidth="20%" />
        })}
      </div>
      {isLoading && <div className="cover" />}
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms
