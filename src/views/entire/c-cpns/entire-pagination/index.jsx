import { memo } from 'react'
import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@mui/material'
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo(function EntirePagination() {
  const dispatch = useDispatch()

  const { currentPage, roomList, totalCount } = useSelector(
    (state) => ({
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount
    }),
    shallowEqual
  )

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = startCount + 19

  const handleChange = (event, pageCount) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    dispatch(changeCurrentPageAction(pageCount))
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      {roomList.length > 0 && (
        <div className="pagination">
          <Pagination count={totalPage} onChange={handleChange} />
          <div className="info">
            From {startCount} to {endCount} more than {totalCount}
          </div>
        </div>
      )}
    </PaginationWrapper>
  )
})

export default EntirePagination
