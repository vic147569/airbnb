import { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import DetailPicture from './c-cpns/detail-pictures'
import DetailInfo from './c-cpns/detail-info'

const Detail = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqual
  )

  return (
    <DetailWrapper>
      <DetailPicture pictureUrls={detailInfo.picture_urls} />
      <DetailInfo />
    </DetailWrapper>
  )
})

Detail.displayName = 'Detail'
export default Detail
