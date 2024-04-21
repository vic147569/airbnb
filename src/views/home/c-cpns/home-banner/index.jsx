import { memo } from 'react'
import { BannerWrapper } from './style'

const HomeBanner = memo(() => {
  return <BannerWrapper>HomeBanner</BannerWrapper>
})

HomeBanner.displayName = 'HomeBanner'
export default HomeBanner
