import { memo } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'

export const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner />
    </HomeWrapper>
  )
})

Home.displayName = 'Home'
export default Home
