import { memo, useCallback } from 'react'
// import PropTypes from 'prop-types'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(function EntireRooms() {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  )

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback(
    (itemData) => {
      dispatch(changeDetailInfoAction(itemData))
      navigate('/detail')
    },
    [navigate, dispatch]
  )

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount} more house</h2>
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem key={item._id} itemData={item} itemWidth="20%" itemClick={itemClickHandle} />
          )
        })}
      </div>
      {isLoading && <div className="cover" />}
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms
