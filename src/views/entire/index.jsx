import { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { useDispatch } from 'react-redux'

const Entire = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

Entire.displayName = 'Entire'
export default Entire
