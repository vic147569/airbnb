import { memo } from 'react'
import { InfoWrapper } from './style'

const DetailInfo = memo(() => {
  return <InfoWrapper>Detail Info</InfoWrapper>
})

DetailInfo.displayName = 'DetailInfo'
export default DetailInfo
