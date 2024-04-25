import { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { PictureWrapper } from './style'
// import { shallowEqual, useSelector } from 'react-redux'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPicture = memo(function DetailPicture(props) {
  const { pictureUrls } = props
  const [showBrowser, setShowBrowser] = useState(false)

  // const { detailInfo } = useSelector(
  //   (state) => ({
  //     detailInfo: state.detail.detailInfo
  //   }),
  //   shallowEqual
  // )

  return (
    <PictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={() => setShowBrowser(true)}>
            <img src={pictureUrls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>

        <div className="right">
          {pictureUrls.slice(1, 5).map((item) => {
            return (
              <div className="item" key={item} onClick={() => setShowBrowser(true)}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="show-btn" onClick={() => setShowBrowser(true)}>
        Show Picture
      </div>
      {showBrowser && (
        <PictureBrowser pictureUrls={pictureUrls} closeClick={() => setShowBrowser(false)} />
      )}
    </PictureWrapper>
  )
})

DetailPicture.propTypes = {
  pictureUrls: PropTypes.array
}

export default DetailPicture
