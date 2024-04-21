import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'

export const Home = memo(() => {
  const dispatch = useDispatch()

  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          {/* <ul>
            {goodPriceInfo.list.map((item) => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul> */}
        </div>
      </div>
    </HomeWrapper>
  )
})

Home.displayName = 'Home'
export default Home
