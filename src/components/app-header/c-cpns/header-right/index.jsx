import { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  function profileClickHandle() {
    setShowPanel(true)
  }

  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    // true ==> prevent bubble
    window.addEventListener('click', windowHandleClick, true)

    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">Login</span>
        <span className="btn">SignUp</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">register</div>
              <div className="item">login</div>
            </div>
            <div className="bottom">
              <div className="item">rent</div>
              <div className="item">experience</div>
              <div className="item">help</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

HeaderRight.displayName = 'HeaderRight'
export default HeaderRight
