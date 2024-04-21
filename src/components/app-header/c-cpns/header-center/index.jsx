import IconSearch from '@/assets/svg/icon_search'
import { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">Search</div>
        <div className="icon">
          <IconSearch />
        </div>
      </div>
    </CenterWrapper>
  )
})

HeaderCenter.displayName = 'HeaderCenter'
export default HeaderCenter
